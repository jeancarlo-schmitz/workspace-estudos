import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-message-input',
  standalone: true,
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss'],
  imports: [CommonModule, ButtonModule, FormsModule, InputTextareaModule]
})
export class MessageInputComponent {
  @Input() loading = false;
  @Output() sendMessage = new EventEmitter<string>();

  public message = '';
  public maxLength = 200;

  onSubmit() {
    if (this.message.trim() && this.message.length <= this.maxLength) {
      this.sendMessage.emit(this.message);
      this.message = '';
    }
  }

  get remainingChars(): number {
    return this.maxLength - this.message.length;
  }
}
