import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule, 
    MenuModule
  ], 
  exports : [HeaderComponent]
})
export class HeaderModule { }
