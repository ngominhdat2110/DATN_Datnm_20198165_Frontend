import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';
import { Movie } from '../../../entities/movie/movie';
import { Room } from '../../../entities/room/room';
import { Seat } from '../../../entities/seat/seat';
import { Theater } from '../../../entities/theater/theater';
import { MovieService } from '../../../services/movie.service';
import { RoomService } from '../../../services/room.service';
import { SeatService } from '../../../services/seat.service';
import { TheaterService } from '../../../services/theater.service';
import { Customer } from '../../../entities/customer/customer';
import { CustomerService } from '../../../services/customer.service';
import { TicketDTO } from '../../../entities/ticket/ticketDTO';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent {
  id!: number;
  ticket: TicketDTO = new TicketDTO();
  movie: Movie | null = null;
  customer: Customer | null = null;
  theater: Theater | null = null;
  room: Room | null = null;
  seats: Seat[] = [];

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private movieService: MovieService,
    private customerService: CustomerService,
    private theaterService: TheaterService,
    private roomService: RoomService,
    private seatService: SeatService
  ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadTicketDetails();
  }

  loadTicketDetails() {
    // Lấy thông tin vé
    this.ticketService.getTicketById(this.id).subscribe(ticketData => {
      this.ticket = ticketData;

      // Lấy thông tin phim
      this.movieService.getMovieById(this.ticket.movieId).subscribe(movieData => {
        this.movie = movieData;
      });

      // Lấy thông tin người dùng
      this.customerService.getCustomerById(this.ticket.userId).subscribe(customerData => {
        this.customer = customerData;
      });

      // Lấy thông tin rạp
      this.theaterService.getTheaterById(this.ticket.theaterId).subscribe(theaterData => {
        this.theater = theaterData;
      });

      // Lấy thông tin phòng chiếu
      this.roomService.getRoomById(this.ticket.roomId).subscribe(roomData => {
        this.room = roomData;
      });

      // Lấy thông tin ghế ngồi
      // this.seatService.getSeatsByIds(this.ticket.seatId).subscribe(seatData => {
      //   this.seats = seatData;
      // });
    });
  }
}
