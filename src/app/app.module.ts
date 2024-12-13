import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './components/customer/create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './components/customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateTheaterComponent } from './components/theaters/create-theater/create-theater.component';
import { TheaterDetailsComponent } from './components/theaters/theater-details/theater-details.component';
import { TheaterListComponent } from './components/theaters/theater-list/theater-list.component';
import { UpdateTheaterComponent } from './components/theaters/update-theater/update-theater.component';
import { CreateRoomComponent } from './components/rooms/create-room/create-room.component';
import { UpdateRoomComponent } from './components/rooms/update-room/update-room.component';
import { RoomDetailsComponent } from './components/rooms/room-details/room-details.component';
import { RoomListComponent } from './components/rooms/room-list/room-list.component';
import { CreateSeatComponent } from './components/seats/create-seat/create-seat.component';
import { SeatDetailsComponent } from './components/seats/seat-details/seat-details.component';
import { SeatListComponent } from './components/seats/seat-list/seat-list.component';
import { UpdateSeatComponent } from './components/seats/update-seat/update-seat.component';
import { CreateMovieComponent } from './components/movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { UpdateMovieComponent } from './components/movies/update-movie/update-movie.component';

import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MoviesClientComponent } from './components/movies-client/movies-client.component';
import { CreateTicketComponent } from './components/tickets/create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './components/tickets/ticket-details/ticket-details.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    CustomerDetailsComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    CreateTheaterComponent,
    TheaterDetailsComponent,
    TheaterListComponent,
    UpdateTheaterComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    RoomDetailsComponent,
    RoomListComponent,
    CreateSeatComponent,
    SeatDetailsComponent,
    SeatListComponent,
    UpdateSeatComponent,
    CreateMovieComponent,
    MovieDetailsComponent,
    MovieListComponent,
    UpdateMovieComponent,
    SafeUrlPipe,
    MoviesClientComponent,
    CreateTicketComponent,
    TicketDetailsComponent   ,
    SafeUrlPipe,
    LoginComponent   ,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
