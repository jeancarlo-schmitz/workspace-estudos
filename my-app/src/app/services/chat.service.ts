import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message, RecentFile } from '../models/message.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl;
  private recentFiles: RecentFile[] = [];

  constructor(private http: HttpClient) {}

  sendMessage(text: string): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/chat`, { text });
  }

  getRecentFiles(): Observable<RecentFile[]> {
    return this.http.get<RecentFile[]>(`${this.apiUrl}/files/recent`);
  }

  downloadFile(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }
}