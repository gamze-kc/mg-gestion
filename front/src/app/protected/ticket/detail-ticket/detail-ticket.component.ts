import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

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
  id_proprietaire : number,
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

  uploadedFiles: any[] = [];
  constructor(private messageService: MessageService, private requestService: RequestService, private cookieService : CookieService) {}

  ngOnInit(): void {

    this.requestService.getTicketById(6).subscribe((result)=>{
      this.ticket = result;
      console.log(result)
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
