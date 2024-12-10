import { Component, OnInit } from '@angular/core';
import { Seat } from '../../../entities/seat/seat';
import { Room } from '../../../entities/room/room';
import { SeatService } from '../../../services/seat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-update-seat',
  templateUrl: './update-seat.component.html',
  styleUrl: './update-seat.component.css'
})
export class UpdateSeatComponent implements OnInit{

  id!: number;
  seat: Seat = new Seat();

  rooms: Room[] = [];

  constructor(private seatService: SeatService,
    private roomService: RoomService,
    private route : ActivatedRoute,
    private router: Router){  }

  ngOnInit(): void {
    this.getRooms();
    this.id = this.route.snapshot.params['id'];
    this.seatService.getSeatById(this.id).subscribe(
      {
        next: data  => this.seat = data,
        error: error => console.error(error)
      }
    )
  
  }

  private getRooms() {
    this.roomService.getRoomsList().subscribe(data => {
      this.rooms = data;
    });
  }


  onSubmit() {
    this.seatService.updateSeat(this.id, this.seat).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
    })
    this.goToSeatList();
  }

  goToSeatList() {
    this.router.navigate(['/seats']);
  }

}
