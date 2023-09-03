import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Tableau de Bord',
              icon: 'pi pi-fw pi-home',
              routerLink: 'dashboard',
              
          },
          {
              label: 'Tickets',
              icon: 'pi pi-fw pi-ticket',
              routerLink: 'ticket',
   
          }
      ];
  }
}