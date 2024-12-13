import { Component, OnInit } from '@angular/core';
import { Theater } from '../../../entities/theater/theater';
import { TheaterService } from '../../../services/theater.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theater-list',
  templateUrl: './theater-list.component.html',
  styleUrl: './theater-list.component.css'
})
export class TheaterListComponent implements OnInit{

  theaters!: Theater[];

  constructor( private theaterService: TheaterService, private router: Router) {}

  ngOnInit(): void {
    this.getTheaters();
  }

  private getTheaters() {
    this.theaterService.getTheatersList().subscribe(data => {
      this.theaters = data;
    });
  }

  updateTheater(id: number) {
    this.router.navigate(['theaters/update', id]);
  }

  theaterDetail(id: number) {
    this.router.navigate(['theaters', id]);
  }

  deleteTheater(id: number) {
    this.theaterService.deleteTheater(id).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
      
    })
    this.getTheaters();
  }

}
