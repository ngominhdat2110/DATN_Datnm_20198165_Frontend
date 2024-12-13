import { TheaterService } from './../../../services/theater.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entities/room/room';
import { RoomService } from '../../../services/room.service';
import { ActivatedRoute } from '@angular/router';
import { Theater } from '../../../entities/theater/theater';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit {

  id!: number;
  room: Room = new Room();

  theater: Theater = new Theater();

  constructor(private route: ActivatedRoute,
    private theaterService: TheaterService,
    private roomService: RoomService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoomById(this.id).subscribe(data => {
      this.room = data; // Set the room data
      this.getTheaterDetails(this.room.theaterId);
    });
  }

  private getTheaterDetails(theaterId: number): void {
    this.theaterService.getTheaterById(theaterId).subscribe(data => {
      this.theater = data; // Set the theater data
    });
  }

}
