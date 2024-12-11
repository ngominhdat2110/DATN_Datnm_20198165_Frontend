import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../entities/movie/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent implements OnInit {

  id!: number;
  movie: Movie = new Movie();

  constructor(private movieService: MovieService,
    private route : ActivatedRoute,
    private router: Router){  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movieService.getMovieById(this.id).subscribe(
      {
        next: data  => this.movie = data,
        error: error => console.error(error)
      }
    )
  }

  onSubmit() {
    this.movieService.updateMovie(this.id, this.movie).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
    })
    this.goToMovieList();
  }

  goToMovieList() {
    this.router.navigate(['/movies']);
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.movie.avatar = file;
    }
  }

}
