import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
import { addMonths } from 'date-fns'; // Utilisez date-fns pour manipuler les dates
import { MessageService } from 'primeng/api';


interface User {
  id : number, 
  matricule : number, 
  prenom : string, 
  nom : string, 
  mail :string,
  actif: string, 
  role : string
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  selectedUser: User | undefined;
  users: User[] = [];
  visible: boolean = false;
  adminPassword : string =  "";
  constructor(
    private router: Router,
    private requestService: RequestService,
    private cookieService: CookieService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    if (this.cookieService.get('AuthUser')) {
      this.router.navigate(['/protected/dashboard']);
    } else {
      this.requestService.AllUsers().subscribe((users) => {
        // Affectez les utilisateurs récupérés à this.users
        this.users = users;
      });
    }

  }

  connexion() {
    if (this.selectedUser !== undefined && this.selectedUser.id !== undefined) {
      if (this.selectedUser.role.toString() == 'ADMIN') {
        this.visible = true;
      } else {
        this.validation()
      }
    }
  }


  validation() {


    if (this.selectedUser !== undefined && this.selectedUser.id !== undefined) {


      if (this.selectedUser.role.toString() == 'ADMIN') {
        if(this.adminPassword == '123'){
          const expirationDate = addMonths(new Date(), 1);
          this.cookieService.set('Role', this.selectedUser.role.toString(), expirationDate);
          this.cookieService.set('AuthUser', this.selectedUser.id.toString(), expirationDate);
          this.router.navigate(['/protected/dashboard']);
          this.visible = false;
        }else{
          this.visible = false;
          this.adminPassword = ''; 
          this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Code de verification incorrecte !' });
        }

      }else{
        const expirationDate = addMonths(new Date(), 1);
        this.cookieService.set('Role', this.selectedUser.role.toString(), expirationDate);
        this.cookieService.set('AuthUser', this.selectedUser.id.toString(), expirationDate);
        this.router.navigate(['/protected/dashboard']);
      }

    }
  }
}

