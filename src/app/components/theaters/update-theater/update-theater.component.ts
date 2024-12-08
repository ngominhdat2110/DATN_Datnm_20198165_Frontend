import { Component, OnInit } from '@angular/core';
import { Theater } from '../../../entities/theater/theater';
import { TheaterService } from '../../../services/theater.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-theater',
  templateUrl: './update-theater.component.html',
  styleUrl: './update-theater.component.css'
})
export class UpdateTheaterComponent implements OnInit {
  id!: number;
  theater: Theater = new Theater();

  constructor(private theaterService: TheaterService,
    private route : ActivatedRoute,
    private router: Router){  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.theaterService.getTheaterById(this.id).subscribe(
      {
        next: data  => this.theater = data,
        error: error => console.error(error)
      }
    )
  }

  onSubmit() {
    this.theaterService.updateTheater(this.id, this.theater).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
    })
    this.goToTheaterList();
  }

  goToTheaterList() {
    this.router.navigate(['/theaters']);
  }
}
