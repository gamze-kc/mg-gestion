import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedComponent } from './protected.component';
import { ProtectedRoutingModule } from './protected-routing.module';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [
    ProtectedComponent
  ],
  imports: [
    MenuModule,
    HeaderModule,
    CommonModule, 
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
