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

  OneUser(id: number): Observable<User> {
    const apiUrl = 'http://localhost:3000/users/'+id;
    return this.http.get(apiUrl).pipe(
      map((data: any) => {
        // Transformez les données de l'API en un tableau d'objets User
        return data[0];
      })
    );
  }
}
