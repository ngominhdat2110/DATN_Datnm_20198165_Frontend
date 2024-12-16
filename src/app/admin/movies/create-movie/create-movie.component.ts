import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../entities/movie/movie';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movie: Movie = new Movie();
  selectedFile: File | null = null; // Biến để lưu file ảnh

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {}

  // Hàm để gửi yêu cầu tạo movie
  saveMovie() {
    if (this.selectedFile) {
      this.movieService.createMovie(this.selectedFile, this.movie).subscribe({
        next: data => {
          console.log(data);
          this.goToMovieList();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }

  // Điều hướng tới danh sách các bộ phim
  goToMovieList() {
    this.router.navigate(['/admin/movies']);
  }

  // Hàm gửi form khi người dùng nhấn nút submit
  onSubmit() {
    console.log(this.movie);
    this.saveMovie();
  }

  // Hàm xử lý thay đổi tệp khi người dùng chọn ảnh
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file; // Lưu trữ file ảnh được chọn
    }
  }
}
