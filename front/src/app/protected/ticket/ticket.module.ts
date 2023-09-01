import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';



@NgModule({
  declarations: [
    TicketComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketModule { }
