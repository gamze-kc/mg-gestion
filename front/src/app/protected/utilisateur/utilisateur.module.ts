import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailUtilComponent } from './detail-util/detail-util.component';
import { ListUtilComponent } from './list-util/list-util.component';
import { UtilisateurComponent } from './utilisateur.component';

@NgModule({
  declarations: [
    UtilisateurComponent,
    ListUtilComponent,
    DetailUtilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilisateurModule { }
