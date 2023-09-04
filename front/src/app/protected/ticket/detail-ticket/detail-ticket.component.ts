import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent {
  visible: boolean = false;
  text: string | undefined;
  maxSize : number = 100000000;

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  showDialog() {
      this.visible = true;
  }
}
