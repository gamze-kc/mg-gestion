import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedComponent } from './protected.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProtectedComponent
  ],
  imports: [
    MenuModule,
    HeaderModule,
    ButtonModule,
    ProtectedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
  ]
})
export class ProtectedModule { }
