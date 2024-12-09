import { TheaterService } from './../../../services/theater.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entities/room/room';
import { RoomService } from '../../../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Theater } from '../../../entities/theater/theater';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrl: './update-room.component.css'
})
export class UpdateRoomComponent implements OnInit {

  id!: number;
  room: Room = new Room();

  theaters: Theater[] = [];

  constructor(private theaterService: TheaterService,
    private roomService: RoomService,
    private route : ActivatedRoute,
    private router: Router){  }

  ngOnInit(): void {
    this.getTheaters();
    this.id = this.route.snapshot.params['id'];
    this.roomService.getRoomById(this.id).subscribe(
      {
        next: data  => this.room = data,
        error: error => console.error(error)
      }
    )
  
  }

  private getTheaters() {
    this.theaterService.getTheatersList().subscribe(data => {
      this.theaters = data;
    });
  }


  onSubmit() {
    this.roomService.updateRoom(this.id, this.room).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
    })
    this.goToRoomList();
  }

  goToRoomList() {
    this.router.navigate(['/rooms']);
  }
}
