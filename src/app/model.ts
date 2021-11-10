export interface Floor {
  id?: number;
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
