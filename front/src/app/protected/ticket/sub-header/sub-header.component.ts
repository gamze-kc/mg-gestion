import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

interface Catégorie {
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
  dateDebut: Date | undefined;
  dateFin: Date | undefined;
  selectedCategorie: Catégorie | undefined;
  ngOnInit() {
      this.categorie = [
          { id: 1, nom: 'En Cours' },
          { id: 2, nom: 'En Attente' },
          { id: 3, nom: 'Attribué' },
          { id: 4, nom: 'Résolu' },
          { id: 5, nom: 'Rejeté' }
      ];
  }
showDialog() {
    this.visible = true;
}
}