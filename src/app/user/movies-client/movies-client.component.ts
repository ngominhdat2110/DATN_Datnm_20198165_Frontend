import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../entities/movie/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-client',
  templateUrl: './movies-client.component.html',
  styleUrl: './movies-client.component.css'
})
export class MoviesClientComponent implements OnInit {

  movies!: Movie[];
  upcomingMovies: Movie[] | undefined;

  constructor( private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMoviesNowShowing();
    this.getMoviesUpComing();
  }

  private getMoviesNowShowing() {
    this.movieService.getAllMoviesNowShowing().subscribe(data => {
      this.movies = data;
    });
  }

  private getMoviesUpComing() {
    this.movieService.getAllMoviesUpComing().subscribe(data => {
      this.upcomingMovies = data;
    });
  }

  buyTicket(movie: any) {
    // Xử lý hành động mua vé, ví dụ: chuyển hướng đến trang thanh toán
    console.log('Mua vé cho phim:', movie.name);
    // Hoặc chuyển hướng đến màn hình thanh toán
    this.router.navigate(['/tickets', movie.id]);
  }

}
