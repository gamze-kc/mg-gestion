import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
interface Ticket {
  id_proprietaire: number,
  date_creation: Date,
  objet: string,
  description: string,
  categorie: string,
  type: string,
  piece_jointe: string,
  etat: string,
  id_user_support : null | User,
  id: number,
  commentaires : undefined | Commentaire[]
}

interface Commentaire {
  id: number,
  date : Date,
  texte : string,
  piece_jointe: string,
  id_proprietaire : User,
}


interface User {
  id: number,
  matricule: number,
  prenom: string,
  nom: string,
  mail: string,
  actif: string,
  role: string
}

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  fakeArray: any[] = Array(30);
  tickets: Ticket[] = [];

  constructor(
    private cookieService: CookieService,
    private requestService: RequestService, 
    private router : Router
  ) { }


  ngOnInit(): void {
    if (this.cookieService.get('Role') == 'ADMIN') {
      this.requestService.getTickets().subscribe((result) => {

        if (result != null && result != undefined) {
          if (Array.isArray(result)) {
            result.forEach((ticket) => {
              this.tickets.push(ticket);
            })
          } else {
            this.tickets.push(result)
          }
        }
    })
  }
}
redirectTo(idTicket: number){
  this.router.navigate(['protected/ticket/'+idTicket])
}

}