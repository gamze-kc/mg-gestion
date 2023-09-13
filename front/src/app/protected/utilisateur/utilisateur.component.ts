import { Component, OnInit } from '@angular/core';
import { RequestService } from 'app/request.service';

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
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{

  constructor(private requestService : RequestService){}

  users : User[] = [];

  ngOnInit(): void {
    this.requestService.AllUsers().subscribe((result) => {
      result.forEach((user)=>this.users.push(user))
    });
  }
  
}
