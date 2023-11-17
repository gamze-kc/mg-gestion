import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //items: MenuItem[] = [];

  items = [
    {

      label: 'Déconnexion',
      icon: 'pi pi-power-off',
      command: () => {
        this.deconnexion();
      }

    }
  ];

  nom: string = "";
  prenom: string = "";
  constructor(private messageService: MessageService,
    private cookieService: CookieService,
    private requestService: RequestService,
    private router: Router) { }

  ngOnInit() {

    if (this.cookieService.get('AuthUser')) {
      
      this.requestService.OneUser(+this.cookieService.get('AuthUser')).subscribe((user) => {
        this.prenom = user.prenom;
        this.nom = user.nom;
      });
    }
  }







  deconnexion() {
    this.cookieService.delete('AuthUser');
    this.cookieService.delete('Role');
    this.router.navigate(['/'])
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Déconnexion reussit' });
  }

}