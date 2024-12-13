import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//customer
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
// theater

import { TheaterListComponent } from './theaters/theater-list/theater-list.component';
import { TheaterDetailsComponent } from './theaters/theater-details/theater-details.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { UpdateTheaterComponent } from './theaters/update-theater/update-theater.component';

import { HomeComponent } from './home/home.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { CreateRoomComponent } from './rooms/create-room/create-room.component';
import { UpdateRoomComponent } from './rooms/update-room/update-room.component';
import { RoomDetailsComponent } from './rooms/room-details/room-details.component';
import { SeatListComponent } from './seats/seat-list/seat-list.component';
import { CreateSeatComponent } from './seats/create-seat/create-seat.component';
import { UpdateSeatComponent } from './seats/update-seat/update-seat.component';
import { SeatDetailsComponent } from './seats/seat-details/seat-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CreateTicketComponent } from './tickets/create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
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
export class AdminRoutingModule { }
