import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, Floor, Room } from 'src/app/model';
@Injectable({
  providedIn: 'root',
})
export class FloorService {
  constructor(private http: HttpClient) {}
  // private departmentApi = 'http://localhost:5000/departments';
  // private roomApi = 'http://localhost:5000/rooms';
  
  private roomApi = '//feedback-project-api.herokuapp.com/api/v1/rooms';
  private floorApi = 'https://feedback-project-api.herokuapp.com/api/v1/floors';
  private departmentApi = 'https://feedback-project-api.herokuapp.com/api/v1/departments';

  public getfloor(): Observable<Floor[]> {
    return this.http.get<Floor[]>(this.floorApi);
  }
  public getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentApi);
  }
  public getRoom(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomApi);
  }
}
