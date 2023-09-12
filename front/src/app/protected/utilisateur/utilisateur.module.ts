import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateurComponent } from './utilisateur.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    UtilisateurComponent,
  ],
  imports: [
    TableModule,
    CommonModule
  ]
})
export class UtilisateurModule { }
