import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedComponent } from './protected.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ParametreAppComponent } from './parametre-app/parametre-app.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    ProtectedComponent,
  ],
  imports: [
    MenuModule,
    HeaderModule,
    ButtonModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ProtectedRoutingModule,
    CommonModule, 
  ]
})
export class ProtectedModule { }
