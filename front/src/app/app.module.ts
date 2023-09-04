import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { LocalStorageDirective } from 'ngx-localstorage';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  providers: [MessageService, RequestService, CookieService],
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    DialogModule,
    ToastModule,
    LocalStorageDirective,
    DropdownModule,
    CascadeSelectModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
