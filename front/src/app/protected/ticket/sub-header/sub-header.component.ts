import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';

interface Categorie {
  id: number,
  libelle: string,
  actif: string
}

interface Type {
  id: number,
  libelle: string,
  actif: string
}


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  visible: boolean = false;
  categories: Categorie[] = [];
  types: Type[] = [];
  dateDebut: Date | undefined;
  dateFin: Date | undefined;
  selectedCategorie: Categorie | undefined;
  selectedType: Type | undefined;
  isAdmin = false;

  newTicketObjet !: string;
  newTicketCategorie: Categorie | undefined;
  newTicketType: Type | undefined;
  newTicketcommentaire !: string;
  newTicketuploadedFiles: any[] = [];

  constructor(
    private messageService: MessageService,
    private cookieService: CookieService,
    private requestService: RequestService) { }

  ngOnInit() {


    this.requestService.AllCategories().subscribe((result) => {
      result.forEach((categorie) => {
        this.categories?.push(categorie)
      })
    })

    this.requestService.AllTypes().subscribe((result) => {
      result.forEach((type) => {
        this.types?.push(type)
      })
    })

    if (this.cookieService.get('Role') == 'ADMIN') {
      this.isAdmin = true;
    }

  }
  showDialog() {
    this.visible = true;
  }

  Filtre() {
    //remplir la lsite filtre ( qui est a créer) 
  }

  reloadFiltre() {
    this.selectedCategorie = undefined;
    this.dateDebut = undefined;
    this.dateFin = undefined;
    this.selectedType = undefined;
    this.Filtre();
    this.messageService.add({ severity: 'info', summary: 'Les filtres ont été effacés', detail: '' });
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.newTicketuploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  creerTicket() {

    if (this.newTicketCategorie != undefined && this.newTicketType != undefined && this.newTicketObjet != "" && this.newTicketcommentaire != ""&& this.newTicketObjet != null && this.newTicketcommentaire != null) {
      this.requestService.newTicket(this.newTicketObjet, this.newTicketcommentaire, this.newTicketCategorie.id, this.newTicketType.id, this.newTicketuploadedFiles.toString()).subscribe((data) => console.log(data));
      this.newTicketObjet = "";
      this.newTicketcommentaire = "";
      this.newTicketCategorie = undefined;
      this.newTicketType = undefined;
      this.newTicketuploadedFiles = []
      this.visible = false;
    } else {
      if (this.newTicketCategorie == undefined) {
        this.messageService.add({ severity: 'error', summary: 'Erreur dans la saisie du ticket', detail: 'La categorie du ticket doivent obliagtoirement etre renseigné' });
      }
      if (this.newTicketType == undefined) {
        this.messageService.add({ severity: 'error', summary: 'Erreur dans la saisie du ticket', detail: 'Le type du ticket doivent obliagtoirement etre renseigné' });
      }
      if (this.newTicketObjet == null ||this.newTicketObjet == " ") {
        this.messageService.add({ severity: 'error', summary: 'Erreur dans la saisie du ticket', detail: 'L\'objet ne peut pas être vide' });
      }
  
      if (this.newTicketcommentaire == null || this.newTicketcommentaire == " ") {
        this.messageService.add({ severity: 'error', summary: 'Erreur dans la saisie du ticket', detail: 'La description ne peut pas être vide' });
      }
    }

  }

}