import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './admin/customer/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './admin/customer/create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './admin/customer/update-customer/update-customer.component';
import { CustomerDetailsComponent } from './admin/customer/customer-details/customer-details.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidenavComponent } from './admin/sidenav/sidenav.component';
import { HomeComponent } from './admin/home/home.component';
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
import { CreateTheaterComponent } from './admin/theaters/create-theater/create-theater.component';
import { TheaterDetailsComponent } from './admin/theaters/theater-details/theater-details.component';
import { TheaterListComponent } from './admin/theaters/theater-list/theater-list.component';
import { UpdateTheaterComponent } from './admin/theaters/update-theater/update-theater.component';
import { CreateRoomComponent } from './admin/rooms/create-room/create-room.component';
import { UpdateRoomComponent } from './admin/rooms/update-room/update-room.component';
import { RoomDetailsComponent } from './admin/rooms/room-details/room-details.component';
import { RoomListComponent } from './admin/rooms/room-list/room-list.component';
import { CreateSeatComponent } from './admin/seats/create-seat/create-seat.component';
import { SeatDetailsComponent } from './admin/seats/seat-details/seat-details.component';
import { SeatListComponent } from './admin/seats/seat-list/seat-list.component';
import { UpdateSeatComponent } from './admin/seats/update-seat/update-seat.component';
import { CreateMovieComponent } from './admin/movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './admin/movies/movie-details/movie-details.component';
import { MovieListComponent } from './admin/movies/movie-list/movie-list.component';
import { UpdateMovieComponent } from './admin/movies/update-movie/update-movie.component';

import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MoviesClientComponent } from './user/movies-client/movies-client.component';
import { CreateTicketComponent } from './admin/tickets/create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './admin/tickets/ticket-details/ticket-details.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

import { UserRoutingModule} from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { NavbarComponent } from './user/navbar/navbar.component';
import { FooterComponent } from './user/footer/footer.component';

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
    LoginComponent,
    AdminComponent,
    UserComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    AdminRoutingModule,
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
    MatInputModule,
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
