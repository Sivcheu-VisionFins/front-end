import { Component, OnInit } from '@angular/core';
import { Department, Floor, Message, Room, sendMessage } from 'src/app/model';
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
  floorId: string | null = '';
  departmentId: string | null = '';
  constructor(
    private floorService: FloorService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.floorService.getfloor().subscribe((data: any) => {
      console.log(data);
      this.floors = data.payload;
    });
    this.floorService.getDepartment().subscribe((data: any) => {
      console.log(2, data);
      this.department = data.payload;
    });
    this.floorService.getRoom().subscribe((data: any) => {
      console.log(data);
      this.room = data.payload;
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
    this.departmentId = null;
    this.message.department_id = '';
  }
  getDepartmentId(depart: any) {
    console.log('departmentId', depart);
    this.departmentId = depart;
    this.message.room_id = '';
  }

  sendMessage(): void {
    let feedBackType = '';
    let uniqueIDs = [''];
    if (this.message.floor_id != '') {
      feedBackType = 'floor';
      uniqueIDs = [this.message.floor_id];
      if (this.message.department_id != '') {
        feedBackType = 'department';
        uniqueIDs = [this.message.department_id];
        if (this.message.room_id != '') {
          uniqueIDs = [this.message.room_id];
          feedBackType = 'room';
        }
      }
    }
 

    const data: sendMessage = {
      title: this.message.title,
      message: this.message.msg,
      feedbackLevel: this.message.status,

      feedbackType: feedBackType,
      uniqueIDs: uniqueIDs,
    };
    console.log(data);
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
