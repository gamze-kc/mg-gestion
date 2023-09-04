import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { DetailTicketComponent } from './detail-ticket/detail-ticket.component';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    TicketComponent,
    SubHeaderComponent, 
    ListTicketComponent, 
    DetailTicketComponent, 
  ],
  imports: [
    DialogModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    FormsModule,
    EditorModule,
    CommonModule,
    ButtonModule
  ]
})
export class TicketModule { }
