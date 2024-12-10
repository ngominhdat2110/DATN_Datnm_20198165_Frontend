import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../entities/movie/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  id!: number;
  movie: Movie = new Movie();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe(data => this.movie = data)
  }

  goToMovieList() {
    this.router.navigate(['/movies']);
  }

}
