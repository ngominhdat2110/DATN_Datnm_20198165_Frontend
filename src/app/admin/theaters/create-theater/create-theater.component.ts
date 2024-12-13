import { Component, OnInit } from '@angular/core';
import { Theater } from '../../../entities/theater/theater';
import { TheaterService } from '../../../services/theater.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-theater',
  templateUrl: './create-theater.component.html',
  styleUrl: './create-theater.component.scss'
})
export class CreateTheaterComponent implements OnInit {

  theater: Theater = new Theater();
  
  constructor(private theaterService : TheaterService, private router : Router) {}

  ngOnInit(): void {
    
  }

  saveTheater() {
    this.theaterService.createTheater(this.theater).subscribe( {
      next: data => console.log(data),
      error: error => console.log(error)
    } )
    this.goToTheaterList()
  }

  goToTheaterList() {
    this.router.navigate(['/theaters']);
  }

  onSubmit(){
    console.log(this.theater);
    this.saveTheater()
  }
  
}
