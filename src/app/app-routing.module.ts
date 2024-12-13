import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//customer
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
// theater

import { TheaterListComponent } from './components/theaters/theater-list/theater-list.component';
import { TheaterDetailsComponent } from './components/theaters/theater-details/theater-details.component';
import { CreateTheaterComponent } from './components/theaters/create-theater/create-theater.component';
import { UpdateTheaterComponent } from './components/theaters/update-theater/update-theater.component';


import { HomeComponent } from './home/home.component';
import { RoomListComponent } from './components/rooms/room-list/room-list.component';
import { CreateRoomComponent } from './components/rooms/create-room/create-room.component';
import { UpdateRoomComponent } from './components/rooms/update-room/update-room.component';
import { RoomDetailsComponent } from './components/rooms/room-details/room-details.component';
import { SeatListComponent } from './components/seats/seat-list/seat-list.component';
import { CreateSeatComponent } from './components/seats/create-seat/create-seat.component';
import { UpdateSeatComponent } from './components/seats/update-seat/update-seat.component';
import { SeatDetailsComponent } from './components/seats/seat-details/seat-details.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { CreateMovieComponent } from './components/movies/create-movie/create-movie.component';
import { UpdateMovieComponent } from './components/movies/update-movie/update-movie.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MoviesClientComponent } from './components/movies-client/movies-client.component';
import { CreateTicketComponent } from './components/tickets/create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';

const routes: Routes = [
  //{path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'dashboard', component: DashboardComponent},


  //customer
  {path: "", redirectTo: 'customers', pathMatch: 'full'},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/signup', component: CreateCustomerComponent},
  {path: 'customers/update/:id', component: UpdateCustomerComponent},
  {path: 'customers/:id', component: CustomerDetailsComponent},

  //theater
  {path: "", redirectTo: 'theaters', pathMatch: 'full'},
  {path: "theaters", component: TheaterListComponent},
  {path: "theaters", component: CreateTheaterComponent},
  {path: "theaters/update/:id", component: UpdateTheaterComponent},
  {path: "theaters/:id", component: TheaterDetailsComponent},

  //room
  {path: "", redirectTo: 'rooms', pathMatch: 'full'},
  {path: "rooms", component: RoomListComponent},
  {path: "rooms", component: CreateRoomComponent},
  {path: "rooms/update/:id", component: UpdateRoomComponent},
  {path: "rooms/:id", component: RoomDetailsComponent},

  //seat
  {path: "", redirectTo: 'seats', pathMatch: 'full'},
  {path: "seats", component: SeatListComponent},
  {path: "seats", component: CreateSeatComponent},
  {path: "seats/update/:id", component: UpdateSeatComponent},
  {path: "seats/:id", component: SeatDetailsComponent},

  //movie
  {path: "", redirectTo: 'movies', pathMatch: 'full'},
  {path: "movies", component: MovieListComponent},
  {path: "movies/create", component: CreateMovieComponent},
  {path: "movies/update/:id", component: UpdateMovieComponent},
  {path: "movies/:id", component: MovieDetailsComponent},

  //movie_client
  // {path: "", redirectTo: 'movies-client', pathMatch: 'full'},
  {path: "movies-client", component: MoviesClientComponent},

  //tickets
  {path: "", redirectTo: 'tickets', pathMatch: 'full'},
  {path: "tickets", component: CreateTicketComponent},
  // {path: "movies/update/:id", component: UpdateMovieComponent},
  {path: "tickets/:id", component: TicketDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
