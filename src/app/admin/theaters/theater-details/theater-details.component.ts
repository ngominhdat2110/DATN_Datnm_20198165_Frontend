import { Component, OnInit } from '@angular/core';
import { Theater } from '../../../entities/theater/theater';
import { ActivatedRoute } from '@angular/router';
import { TheaterService } from '../../../services/theater.service';

@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrl: './theater-details.component.css'
})
export class TheaterDetailsComponent implements OnInit {
  id!: number;
  theater: Theater = new Theater();

  constructor(private route: ActivatedRoute,
    private theaterService: TheaterService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.theaterService.getTheaterById(this.id).subscribe(data => this.theater = data)
  }

}
