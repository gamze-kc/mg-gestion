import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

interface Ticket {
  id_proprietaire: 1,
  date_creation: Date,
  objet: string,
  description: string,
  categorie: string,
  type: string,
  piece_jointe: string,
  etat: string,
  id_user_support : null | User,
  id: 1
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

interface Etat {
  nom : string, 
  color: string, 
}

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent implements OnInit{
  visible: boolean = false;
  text: string | undefined;
  maxSize : number = 100000000;
  ticket : Ticket | undefined; 
  idConnectedUser: number | undefined; 
  idTicket : undefined | number ;
  affichage : boolean = false;
  etatSelected : Etat |undefined; 
  etatsTicket : Etat[] = [
    {
      nom : 'NOUVEAU',
      color :'rgb(0, 62, 231)'
    },
    {
      nom : 'ASSIGNE',
      color :'rgb(0, 62, 231)'
    },
    {
      nom : 'EN_COURS',
      color :'rgb(0, 62, 231)'
    },
    {
      nom : 'EN_ATTENTE',
      color :'rgb(0, 62, 231)'
    },
    {
      nom : 'RESOLU',
      color :'rgb(0, 62, 231)'
    },
    {
      nom : 'REJETE',
      color :'rgb(0, 62, 231)'
    }
  ]

  uploadedFiles: any[] = [];
  constructor(private messageService: MessageService, private requestService: RequestService, private cookieService : CookieService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.affichage = false;
    this.route.params.subscribe(params => {
      this.idTicket= +params['idTicket'];
      if(this.idTicket != undefined){
        this.requestService.getTicketById(this.idTicket).subscribe((result)=>{
          this.ticket = result;
        })
      }
    })


    this.idConnectedUser = +this.cookieService.get('AuthUser')
  }



  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  showDialog() {
      this.visible = true;
  }
}
