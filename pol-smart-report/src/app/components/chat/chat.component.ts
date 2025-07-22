import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [MessageService]
})
export class ChatComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  
  messages: Message[] = [];
  loading = false;

  constructor(
    private chatService: ChatService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  async sendMessage(text: string) {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      timestamp: new Date(),
      isUser: true
    };

    this.messages.push(userMessage);
    this.loading = true;

    try {
      const response = await this.chatService.sendMessage(text).toPromise();
      if (response) {
        this.messages.push(response);
      }
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to send message'
      });
    } finally {
      this.loading = false;
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const element = this.chatContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    });
  }
}