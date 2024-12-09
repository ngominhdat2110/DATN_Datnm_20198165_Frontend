import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../entities/room/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseURL = "http://localhost:8080/datn/v1/rooms";

  constructor(private httpClient: HttpClient) { }

  getRoomsList(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.baseURL}`);
  }

  createRoom(room : Room): Observable<Room> {
    return this.httpClient.post<Room>(`${this.baseURL}`, room);
  }

  getRoomById(id: number): Observable<Room>{
    return this.httpClient.get<Room>(`${this.baseURL}/${id}`)
  }

  updateRoom(id: number, room: Room): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, room);
  }

  deleteRoom(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
