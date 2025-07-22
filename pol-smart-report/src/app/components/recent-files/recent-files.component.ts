import { Component, OnInit } from '@angular/core';
import { RecentFile } from '../../models/message.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-recent-files',
  templateUrl: './recent-files.component.html',
  styleUrls: ['./recent-files.component.scss']
})
export class RecentFilesComponent implements OnInit {
  recentFiles: RecentFile[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.loadRecentFiles();
  }

  private loadRecentFiles() {
    this.chatService.getRecentFiles().subscribe(files => {
      this.recentFiles = files.slice(0, 5);
    });
  }

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