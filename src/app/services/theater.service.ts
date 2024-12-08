import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theater } from '../entities/theater/theater';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  private baseURL = "http://localhost:8080/datn/v1/theaters";

  constructor(private httpClient: HttpClient) { }

  getTheatersList(): Observable<Theater[]>{
    return this.httpClient.get<Theater[]>(`${this.baseURL}`);
  }

  createTheater(theater : Theater): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, theater);
  }

  getTheaterById(id: number): Observable<Theater>{
    return this.httpClient.get<Theater>(`${this.baseURL}/${id}`)
  }

  updateTheater(id: number, theater: Theater): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, theater);
  }

  deleteTheater(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getAllMoviesByTheaterId(id:number): Observable<Object> {
    return this.httpClient.get(`${this.baseURL}/${id}/movies`);
  }
}
