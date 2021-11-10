import { Component, OnInit } from '@angular/core';
import { Department, Floor, Room } from 'src/app/model';
import { FloorService } from 'src/app/service/floor/floor.service';

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
  constructor(private floorService: FloorService) {}

  ngOnInit(): void {
    this.floorService.getfloor().subscribe((data: Floor[]) => {
      console.log(data);
      this.floors = data;
    });
    this.floorService.getDepartment().subscribe((data: Department[]) => {
      console.log(data);
      this.department = data;
    });
    this.floorService.getRoom().subscribe((data: Room[]) => {
      console.log(data);
      this.room = data;
    });
  }

  getId(floor: any) {
    console.log(floor);
    this.floorId = floor;
  }
}
