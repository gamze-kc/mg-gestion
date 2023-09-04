import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'app/request.service';
import { CookieService } from 'ngx-cookie-service';
import { addMonths } from 'date-fns'; // Utilisez date-fns pour manipuler les dates


interface User {
  id : number,
  nom : string, 
  prenom : string
}
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  selectedUser: User | undefined;
  users : User[] = [];
  constructor(
    private router : Router, 
    private requestService : RequestService, 
    private cookieService :CookieService
  ){}

ngOnInit(): void {
  if(this.cookieService.get('AuthUser')){
    this.router.navigate(['/protected/dashboard']);
  }else{
    this.requestService.AllUsers().subscribe((users) => {
      // Affectez les utilisateurs récupérés à this.users
      this.users = users;
    });
  }

}

  connexion(){
    console.log(this.selectedUser?.id)
    if (this.selectedUser !== undefined && this.selectedUser.id !== undefined) {
      const expirationDate = addMonths(new Date(), 1);
      this.cookieService.set('AuthUser', this.selectedUser.id.toString(), expirationDate);
      this.router.navigate(['/protected/dashboard']);
    }

  }
}

