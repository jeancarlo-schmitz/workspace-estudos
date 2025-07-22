import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent {
  @Input() loading = false;
  @Output() sendMessage = new EventEmitter<string>();

  message = '';
  maxLength = 200;

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