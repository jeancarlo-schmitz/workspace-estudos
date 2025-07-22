import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MessageInputComponent } from '../message-input/message-input.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [MessageService],
  imports: [CommonModule, ButtonModule, ToastModule, MessageComponent, MessageInputComponent]
})
export class ChatComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  messages: Message[] = [];
  loading = false;

  constructor(
    private chatService: ChatService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.createWelcomeMessage();
  }

  private createWelcomeMessage(){
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Bem Vindo, eu sou o Pol Smart Report, e estou aqui para te auxiliar",
      timestamp: new Date(),
      isUser: false
    };

    setTimeout(() =>{
      this.messages.push(welcomeMessage);
    }, 1000)
  }

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
