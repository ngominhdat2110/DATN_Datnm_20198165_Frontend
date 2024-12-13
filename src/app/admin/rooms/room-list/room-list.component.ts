import { Theater } from './../../../entities/theater/theater';
import { TheaterService } from './../../../services/theater.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entities/room/room';
import { RoomService } from '../../../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent implements OnInit {

  theater!: Theater;
  rooms!: Room[]; // Danh sách các phòng chiếu
  theaters: Theater[] = []; // Danh sách các rạp chiếu

  constructor( private theaterService: TheaterService, private router: Router, private roomService: RoomService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRoomsList().subscribe(data => {
      this.rooms = data;
      this.getTheaters();
    })
  }

  // Lấy danh sách các rạp chiếu
  getTheaters() {
    this.theaterService.getTheatersList().subscribe(data => {
      this.theaters = data;
    });
  }

  // Lấy thông tin rạp chiếu theo theaterId
  getTheaterNameById(theaterId: number): string {
    const theater = this.theaters[theaterId];
    return theater ? theater.name : 'Chưa xác định'; // Trả về tên rạp chiếu hoặc thông báo nếu không có
  }

  updateRoom(id: number) {
    this.router.navigate(['/rooms/update', id]);
  }

  roomDetail(id: number) {
    this.router.navigate(['/rooms', id]);
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
      
    })
    this.getRooms();
  }

}
