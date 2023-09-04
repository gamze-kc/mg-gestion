import { Component, OnInit } from '@angular/core';
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
                    this.update();
                }
         
              }
];

  nom :string =""; 
  prenom :string = "";
  constructor(private messageService: MessageService, 
    private cookieService: CookieService, 
    private requestService: RequestService) {}
  
  ngOnInit() {

    const id = +this.cookieService.get('AuthUser');
    console.log(this.cookieService.get('AuthUser'))
      if(this.cookieService.get('AuthUser')){
        console.log('test')
        this.requestService.OneUser(+this.cookieService.get('AuthUser')).subscribe((user) => {
          this.prenom = user.prenom; 
          this.nom = user.nom;
        });
      }
  }







  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

}