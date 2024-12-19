import { Component, NgModule } from '@angular/core';
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
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';

const routes: Routes = [

  {
    path: '', component: AdminComponent,
  
  //{path: "", redirectTo: 'home', pathMatch: 'full'},

  children: [

    { path: 'login', component: LoginComponent },

  {path: 'home', component: HomeComponent},
  // {path: 'dashboard', component: DashboardComponent},


  //customer
  {path: "", redirectTo: 'customers', pathMatch: 'full'},
  {path: 'admin/customers', component: CustomerListComponent},
  {path: 'admin/customers/create', component: CreateCustomerComponent},
  {path: 'admin/customers/update/:id', component: UpdateCustomerComponent},
  {path: 'admin/customers/:id', component: CustomerDetailsComponent},

  //theater
  {path: "", redirectTo: 'theaters', pathMatch: 'full'},
  {path: "admin/theaters", component: TheaterListComponent},
  {path: "admin/theaters", component: CreateTheaterComponent},
  {path: "admin/theaters/update/:id", component: UpdateTheaterComponent},
  {path: "admin/theaters/:id", component: TheaterDetailsComponent},

  //room
  {path: "", redirectTo: 'rooms', pathMatch: 'full'},
  {path: "admin/rooms", component: RoomListComponent},
  {path: "admin/rooms", component: CreateRoomComponent},
  {path: "admin/rooms/update/:id", component: UpdateRoomComponent},
  {path: "admin/rooms/:id", component: RoomDetailsComponent},

  //seat
  {path: "", redirectTo: 'seats', pathMatch: 'full'},
  {path: "admin/seats", component: SeatListComponent},
  {path: "admin/seats", component: CreateSeatComponent},
  {path: "admin/seats/update/:id", component: UpdateSeatComponent},
  {path: "admin/seats/:id", component: SeatDetailsComponent},

  //movie
  {path: "", redirectTo: 'admin/movies', pathMatch: 'full'},
  {path: "admin/movies", component: MovieListComponent},
  {path: "admin/movies/create", component: CreateMovieComponent},
  {path: "admin/movies/update/:id", component: UpdateMovieComponent},
  {path: "admin/movies/:id", component: MovieDetailsComponent},

  //tickets
  {path: "", redirectTo: 'admin/tickets', pathMatch: 'full'},
  {path: "admin/tickets", component: TicketListComponent},
  {path: "admin/tickets/create", component: CreateTicketComponent},
  {path: "admin/tickets/update/:id", component: UpdateMovieComponent},
  {path: "admin/tickets/:id", component: TicketDetailsComponent},

]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
