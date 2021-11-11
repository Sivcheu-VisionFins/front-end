import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sendMessage } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private msgApi =
    'https://feedback-project-api.herokuapp.com/api/v1/feedbacks';
  constructor(private http: HttpClient) {}

  addmessage(data: sendMessage): Observable<any> {
    return this.http.post(this.msgApi, data);
  }
}
