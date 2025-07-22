import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
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