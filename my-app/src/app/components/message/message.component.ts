import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  imports: [CommonModule, CardModule, ButtonModule, ScrollPanelModule, FileUploadModule]
})
export class MessageComponent {
  @Input() message!: Message;

  constructor(private chatService: ChatService) {}

  downloadFile(url: string, filename: string) {
    this.chatService.downloadFile(url).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(link.href);
    });
  }
}
