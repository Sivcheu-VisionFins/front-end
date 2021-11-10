import { Component, OnInit } from '@angular/core';
import { Department, Floor, Message, Room } from 'src/app/model';
import { FloorService } from 'src/app/service/floor/floor.service';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  floors: Floor[] = [];
  department: Department[] = [];
  room: Room[] = [];
  floorId = '';
  departmentId = '';
  constructor(
    private floorService: FloorService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.floorService.getfloor().subscribe((data: any) => {
      console.log(data);
      this.floors = data.payload;
    });
    this.floorService.getDepartment().subscribe((data: Department[]) => {
      console.log(2, data);
      this.department = data;
    });
    this.floorService.getRoom().subscribe((data: Room[]) => {
      console.log(data);
      this.room = data;
    });
  }

  message: Message = {
    title: '',
    msg: '',
    status: '',
    room_id: '',
    department_id: '',
    floor_id: '',
  };

  submitted = false;

  getFloorId(floor: any) {
    console.log(floor);
    this.floorId = floor;
  }
  getDepartmentId(depart: any) {
    console.log('departmentId', depart);
    this.departmentId = depart;
  }

  sendMessage(): void {
    const data = {
      title: this.message.title,
      msg: this.message.msg,
      status: this.message.status,
      room_id: this.message.room_id,
      department_id: this.message.department_id,
      floor_id: this.message.floor_id,
    };
    this.messageService.addmessage(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  newMsg(): void {
    this.submitted = false;
    this.message = {
      title: '',
      msg: '',
      status: '',
      room_id: '',
      department_id: '',
      floor_id: '',
    };
  }
}
