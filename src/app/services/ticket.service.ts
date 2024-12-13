import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../entities/ticket/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseURL = "http://localhost:8080/datn/v1/tickets";

  constructor(private httpClient: HttpClient) { }

  getTicketById(id: number): Observable<Ticket>{
    return this.httpClient.get<Ticket>(`${this.baseURL}/${id}`)
  }
  createTicket(ticket : Ticket): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, ticket);
  }
}
