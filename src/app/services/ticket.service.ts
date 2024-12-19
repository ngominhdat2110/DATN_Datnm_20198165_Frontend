import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../entities/ticket/ticket';
import { Observable } from 'rxjs';
import { TicketDTO } from '../entities/ticket/ticketDTO';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseURL = "http://localhost:8080/datn/v1/tickets";

  constructor(private httpClient: HttpClient) { }

  getTicketsList(): Observable<Ticket[]>{
      return this.httpClient.get<Ticket[]>(`${this.baseURL}`);
    }

  getTicketById(id: number): Observable<TicketDTO>{
    return this.httpClient.get<TicketDTO>(`${this.baseURL}/${id}`)
  }
  createTicket(ticket : Ticket): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, ticket);
  }

  updateTicket(id: number, ticket: Ticket): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
