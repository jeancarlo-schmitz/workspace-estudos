import { Component } from '@angular/core';
import { ChatComponent } from './components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { RecentFilesComponent } from './components/recent-files/recent-files.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, ChatComponent, RecentFilesComponent]
})
export class AppComponent {
  title = 'AI Report Chat';
}
