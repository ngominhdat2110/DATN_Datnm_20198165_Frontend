import { Component } from '@angular/core';
import { Seat } from '../../../entities/seat/seat';
import { Room } from '../../../entities/room/room';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../../services/room.service';
import { SeatService } from '../../../services/seat.service';

@Component({
  selector: 'app-seat-details',
  templateUrl: './seat-details.component.html',
  styleUrl: './seat-details.component.css'
})
export class SeatDetailsComponent {

  id!: number;
  room: Room = new Room();

  seat: Seat = new Seat();

  constructor(private route: ActivatedRoute,
    private seatService: SeatService,
    private roomService: RoomService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.seatService.getSeatById(this.id).subscribe(data => {
      this.seat = data; // Set the room data
      this.getSeatDetails(this.room.theaterId);
    });
  }

  private getSeatDetails(roomId: number): void {
    this.roomService.getRoomById(roomId).subscribe(data => {
      this.room = data; // Set the theater data
    });
  }
}
