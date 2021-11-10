import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private msgApi = 'http://localhost:5000/messages';
  constructor(private http: HttpClient) {}

  addmessage(data: Message): Observable<any> {
    return this.http.post(this.msgApi, data);
  }
}
