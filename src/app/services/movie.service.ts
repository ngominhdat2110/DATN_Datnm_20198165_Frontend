import { Injectable } from '@angular/core';
import { Movie } from '../entities/movie/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseURL = "http://localhost:8080/datn/v1/movies";

  constructor(private httpClient: HttpClient) { }

  getMoviesList(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}`);
  }

  createMovie(movie : Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(`${this.baseURL}`, movie);
  }

  getMovieById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseURL}/${id}`)
  }

  updateMovie(id: number, movie: Movie): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, movie);
  }

  deleteMovie(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
