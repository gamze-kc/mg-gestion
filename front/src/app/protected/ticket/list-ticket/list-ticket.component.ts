import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
interface Ticket {
  id_proprietaire: 1,
  date_creation: Date,
  objet: string,
  description: string,
  categorie: string,
  type: string,
  piece_jointe: string,
  etat: string,
  id_user_support: null | User,
  id: 1
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
    private requestService: RequestService
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
    });

  }
}
}