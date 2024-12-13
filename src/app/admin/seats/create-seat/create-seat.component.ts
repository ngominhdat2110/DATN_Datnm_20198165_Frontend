import { SeatService } from './../../../services/seat.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entities/room/room';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';
import { Seat } from '../../../entities/seat/seat';

@Component({
  selector: 'app-create-seat',
  templateUrl: './create-seat.component.html',
  styleUrl: './create-seat.component.scss'
})
export class CreateSeatComponent implements OnInit{

  seat: Seat = new Seat();
  rooms: Room[] = [];

  constructor(private roomService : RoomService,private seatService: SeatService, private router : Router) {}

  ngOnInit(): void {
    this.getRooms();
  }

  private getRooms() {
    this.roomService.getRoomsList().subscribe(data => {
      this.rooms = data;
    });
  }

  saveSeat() {
    this.seatService.createSeat(this.seat).subscribe( {
      next: data => console.log(data),
      error: error => console.log(error)
    } )
    this.goToSeatList()
  }

  goToSeatList() {
    this.router.navigate(['/seats']);
  }

  onSubmit(){
    console.log(this.seat);
    this.saveSeat()
  }

}
