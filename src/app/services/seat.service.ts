import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seat } from '../entities/seat/seat';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  private baseURL = "http://localhost:8080/datn/v1/seats";

  constructor(private httpClient: HttpClient) { }

  getSeatsList(): Observable<Seat[]>{
    return this.httpClient.get<Seat[]>(`${this.baseURL}`);
  }

  createSeat(seat : Seat): Observable<Seat> {
    return this.httpClient.post<Seat>(`${this.baseURL}`, seat);
  }

  getSeatById(id: number): Observable<Seat>{
    return this.httpClient.get<Seat>(`${this.baseURL}/${id}`)
  }

  updateSeat(id: number, seat: Seat): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, seat);
  }

  deleteSeat(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
