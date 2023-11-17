import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';

interface User {
  id : number, 
  matricule : number, 
  prenom : string, 
  nom : string, 
  mail :string,
  actif: string, 
  role : string
}

interface Ticket {
  id_proprietaire: 1,
  date_creation: Date,
  objet: string,
  description: string,
  categorie: string,
  type: string,
  piece_jointe: string,
  etat: string,
  id_user_support : null | User,
  id: 1
  commentaires : undefined | Commentaire[]
}


interface Commentaire {
  id: number,
  date : Date,
  texte : string,
  piece_jointe: string,
  id_proprietaire : User,
}


interface Categorie {
  id : number, 
  libelle : string, 
  actif : string
}

interface Type {
  id : number, 
  libelle : string, 
  actif : string
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient,
    private cookieService: CookieService ) { }

  AllUsers(): Observable<User[]> {
    const apiUrl = 'http://localhost:3000/users';
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data;
      })
    );
  }

  AllCategories(): Observable<Categorie[]> {
    const apiUrl = 'http://localhost:3000/categories-ticket';
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data;
      })
    );
  }

  AllTypes(): Observable<Type[]> {
    const apiUrl = 'http://localhost:3000/types-ticket';
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data;
      })
    );
  }

  OneUser(id: number): Observable<User> {
    const apiUrl = 'http://localhost:3000/users/'+id;
    console.log(apiUrl)
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data;
      })
    );
  }

  getTickets(): Observable<Ticket[]> {
    const apiUrl = 'http://localhost:3000/tickets';
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data;
      })
    );
  }

  getTicketById(id:number): Observable<Ticket> {
    const apiUrl = 'http://localhost:3000/tickets/'+id;
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data;
      })
    );
  }
}
