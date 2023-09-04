import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private messageService: MessageService) {}
  
  ngOnInit() {
      this.items = [
          {

                      label: 'Déconnexion',
                      icon: 'pi pi-power-off',
                      command: () => {
                          this.update();
                      }
               
                    }
      ];
  }

  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

}