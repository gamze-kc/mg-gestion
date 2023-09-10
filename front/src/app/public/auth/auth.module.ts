import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RequestService } from 'app/request.service';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    DialogModule
  ], 
  providers : [MessageService]
})
export class AuthModule { }
