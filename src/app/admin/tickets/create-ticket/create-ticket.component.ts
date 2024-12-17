import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../entities/ticket/ticket';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';
import { MovieService } from '../../../services/movie.service';
import { TheaterService } from '../../../services/theater.service';
import { RoomService } from '../../../services/room.service';
import { SeatService } from '../../../services/seat.service';
import { Theater } from '../../../entities/theater/theater';
import { Room } from '../../../entities/room/room';
import { Seat } from '../../../entities/seat/seat';
import { Movie } from '../../../entities/movie/movie';
import { MovieTheater } from '../../../entities/movie-theater/movie-theater';

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
  currentMovie: Movie | null = null;
  
  constructor(private ticketService : TicketService,
              private movieService: MovieService,
              private theaterService: TheaterService,
              private roomService: RoomService,
              private seatService: SeatService,
              private movieTheater: MovieTheater,
              private router : Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovieInfoFromRoute(),
    // this.getListMovies(),
    this.getListTheater(),
    this.getListRoom(),
    this.getListSeat()
  }
  getListTheater() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getAllTheaterByMovieId(+movieId).subscribe(data => {
        this.theaters = data;
        console.log('Thông tin danh sach rap:', this.theaters);
      });
    }
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
  // getListMovies() {
  //   this.movieService.getMoviesList().subscribe(data => {
  //     this.movies = data;
  //   });
  // }

  getMovieInfoFromRoute() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId) {
      this.movieService.getMovieById(+movieId).subscribe(data => {
        this.currentMovie = data;
        console.log('Thông tin phim:', this.currentMovie);
      });
    }
  }

  // toggleSeat(seat: Seat) {
  //   if (seat.status === 1) {
  //     seat.status = 0; // Nếu đang được chọn, thì chuyển sang không được chọn
  //   } 
  //   // else {
  //   //   seat.status = 1; // Nếu không được chọn, thì chuyển sang được chọn
  //   // }
  // }

  toggleSeat(seat: any) {
    if (seat.status === 1) {
      const index = this.ticket.seatId.indexOf(seat.id);
      if (index === -1) {
        // Nếu ghế chưa được chọn, thêm vào mảng
        this.ticket.seatId.push(seat.id);
      } else {
        // Nếu ghế đã được chọn, bỏ chọn (xóa khỏi mảng)
        this.ticket.seatId.splice(index, 1);
      }
    }
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

