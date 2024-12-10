import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../entities/movie/movie';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent implements OnInit {


  movie: Movie = new Movie();
  
  constructor(private movieService : MovieService, private router : Router) {}

  ngOnInit(): void {
    
  }

  saveMovie() {
    this.movieService.createMovie(this.movie).subscribe( {
      next: data => console.log(data),
      error: error => console.log(error)
    } )
    this.goToMovieList()
  }

  goToMovieList() {
    this.router.navigate(['/movies']);
  }

  onSubmit(){
    console.log(this.movie);
    this.saveMovie()
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.movie.avatar = file; // Store the selected file as movie avatar
    }
  }
  
}
