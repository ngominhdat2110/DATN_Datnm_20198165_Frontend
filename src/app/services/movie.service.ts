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

  // createMovie(movie : Movie): Observable<Movie> {
  //   return this.httpClient.post<Movie>(`${this.baseURL}`, movie);
  // }

  createMovie(file: File, movie: Movie): Observable<Movie> {
    const formData = new FormData();

    // Thêm tệp ảnh vào FormData
    formData.append('avt', file); // 'avt' là tên trường trong API

    // Thêm đối tượng movie dưới dạng JSON
    formData.append('movie', JSON.stringify(movie)); // 'movie' là tên trường trong API để chứa thông tin movie

    // Gửi formData đi qua phương thức POST
    return this.httpClient.post<Movie>(this.baseURL, formData);
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


  //client
  getAllMoviesNowShowing(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}/now-showing`);
  }

  getAllMoviesUpComing(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseURL}/up-coming`);
  }

}
