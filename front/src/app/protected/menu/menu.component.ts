import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private cookieService: CookieService ){}
  ngOnInit() {

    // TODO : récupération du role depuis l'authservice 
    const role = this.cookieService.get('Role');

    
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

      if(role == 'ADMIN'){
        this.items.push(          {
          label: 'Utilisateurs',
          icon: 'pi pi-fw pi-users',
          routerLink: 'utilisateur',
          
      },
      {
          label: 'Parametres',
          icon: 'pi pi-fw pi-ticket',
          routerLink: 'paramsApp',

      })
      }
  }
}