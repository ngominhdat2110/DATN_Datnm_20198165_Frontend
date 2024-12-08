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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
