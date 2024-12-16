import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../../entities/movie/movie';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  movies!: Movie[];

  constructor( private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies() {
    this.movieService.getMoviesList().subscribe(data => {
      this.movies = data;
    });
  }

  createMovie() {
    this.router.navigate(['admin/movies/create'])
  }

  updateMovie(id: number) {
    this.router.navigate(['admin/movies/update', id]);
  }

  movieDetail(id: number) {
    this.router.navigate(['admin/movies', id]);
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
      
    })
    this.getMovies();
  }

}
