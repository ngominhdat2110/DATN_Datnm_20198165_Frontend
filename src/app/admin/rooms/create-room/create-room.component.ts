import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entities/room/room';
import { RoomService } from '../../../services/room.service';
import { Router } from '@angular/router';
import { TheaterService } from '../../../services/theater.service';
import { Theater } from '../../../entities/theater/theater';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.scss'
})
export class CreateRoomComponent implements OnInit{

  room: Room = new Room();
  theaters: Theater[] = [];

  constructor(private roomService : RoomService,private theaterService: TheaterService, private router : Router) {}

  ngOnInit(): void {
    this.getTheaters();
  }

  private getTheaters() {
    this.theaterService.getTheatersList().subscribe(data => {
      this.theaters = data;
    });
  }

  saveRoom() {
    this.roomService.createRoom(this.room).subscribe( {
      next: data => console.log(data),
      error: error => console.log(error)
    } )
    this.goToRoomList()
  }

  goToRoomList() {
    this.router.navigate(['/rooms']);
  }

  onSubmit(){
    console.log(this.room);
    this.saveRoom()
  }
}
