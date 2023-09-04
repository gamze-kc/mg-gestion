import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface Catégorie {
  id: number;
  nom: string;
}


interface Type {
  id: number;
  nom: string;
}


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent   implements OnInit   {
  visible: boolean = false;
  categorie: Catégorie[] | undefined;
  types: Type[] | undefined;
  dateDebut: Date | undefined;
  dateFin: Date | undefined;
  selectedCategorie: Catégorie | undefined;
  selectedType: Type | undefined;
  selectedCategorieNew: Catégorie | undefined;
  selectedTypeNew: Catégorie | undefined;
  uploadedFiles: any[] = [];


  constructor(private messageService: MessageService){}

  ngOnInit() {
      this.categorie = [
          { id: 1, nom: 'Materiel' },
          { id: 2, nom: 'Logiciel' },
          { id: 3, nom: 'Autre' }
      ];

      this.types = [
        { id: 1, nom: 'Demande' },
        { id: 2, nom: 'Incident' },
        { id: 3, nom: 'Information' },
        { id: 4, nom: 'Résolu' },
        { id: 5, nom: 'Rejeté' }
    ];
  }
showDialog() {
    this.visible = true;
}

Filtre() {
  this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
}

reloadFiltre() {
  this.messageService.add({ severity: 'info', summary: 'Les filtres ont été effacés', detail: '' });
}

onUpload(event: any) {
  for (let file of event.files) {
    this.uploadedFiles.push(file);
  }

  this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
}
}