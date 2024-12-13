import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../entities/ticket/ticket';
import { Router } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';
import { MovieService } from '../../../services/movie.service';
import { TheaterService } from '../../../services/theater.service';
import { RoomService } from '../../../services/room.service';
import { SeatService } from '../../../services/seat.service';
import { Theater } from '../../../entities/theater/theater';
import { Room } from '../../../entities/room/room';
import { Seat } from '../../../entities/seat/seat';
import { Movie } from '../../../entities/movie/movie';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.scss'
})
export class CreateTicketComponent implements OnInit {
  movies!: Movie[];
  theaters!: Theater[];
  rooms!: Room[];
  seats!: Seat[];

  ticket: Ticket = new Ticket();
  
  constructor(private ticketService : TicketService,
              private movieService: MovieService,
              private theaterService: TheaterService,
              private roomService: RoomService,
              private seatService: SeatService,
              private router : Router) {}

  ngOnInit(): void {
    this.getListMovies(),
    this.getListTheater(),
    this.getListRoom(),
    this.getListSeat()
  }
  getListTheater() {
    this.theaterService.getTheatersList().subscribe(data => {
      this.theaters = data;
    });
  }
  getListRoom() {
    this.roomService.getRoomsList().subscribe(data => {
      this.rooms = data;
    });
  }
  getListSeat() {
    this.seatService.getSeatsList().subscribe(data => {
      this.seats = data;
    });
  }
  getListMovies() {
    this.movieService.getMoviesList().subscribe(data => {
      this.movies = data;
    });
  }

  saveTicket() {
    this.ticketService.createTicket(this.ticket).subscribe( {
      next: data => console.log(data),
      error: error => console.log(error)
    } )
    this.goToTicketDetails(this.ticket.id)
  }

  goToTicketDetails(id :number) {
    this.router.navigate(['/tickets', id]);
  }

  onSubmit(){
    console.log(this.ticket);
    this.saveTicket()
  }

}

