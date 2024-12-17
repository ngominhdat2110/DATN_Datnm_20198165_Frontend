import { Injectable } from '@angular/core';
import { MovieTheater } from '../entities/movie-theater/movie-theater';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterService {

  private baseURL = "http://localhost:8080/datn/v1/movie-theaters";
  
    constructor(private httpClient: HttpClient) { }
  
    getMovieTheatersList(): Observable<MovieTheater[]>{
      return this.httpClient.get<MovieTheater[]>(`${this.baseURL}`);
    }
  
    createMovieTheater(movieTheater : MovieTheater): Observable<Object> {
      return this.httpClient.post(`${this.baseURL}`, movieTheater);
    }
  
    getMovieTheaterById(id: number): Observable<MovieTheater>{
      return this.httpClient.get<MovieTheater>(`${this.baseURL}/${id}`)
    }
  
    updateMovieTheater(id: number, movieTheater: MovieTheater): Observable<Object> {
      return this.httpClient.put(`${this.baseURL}/${id}`, movieTheater);
    }
  
    deleteMovieTheater(id: number): Observable<Object> {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
  
}
