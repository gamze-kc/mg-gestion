import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { AjoutCompteComponent } from './ajout-compte/ajout-compte.component';
import { PublicRoutingModule } from './public-routing.module';



@NgModule({
  declarations: [
    PublicComponent,
    AjoutCompteComponent
  ],
  imports: [
    PublicRoutingModule,
    CommonModule, 

  ]
})
export class PublicModule { }
