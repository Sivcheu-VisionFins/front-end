export interface Floor {
  _id?: string;
  name: string;
  manager_id: string;
}
export interface Department {
  id?: number;
  name: string;
  floor_id: string;
}
export interface Room {
  id?: number;
  name: string;
  department_id: string;
}
export interface Message {
  id?: number;
  title: string;
  msg: string;
  status: string;
  room_id?: string;
  department_id?: string;
  floor_id?: string;
}
