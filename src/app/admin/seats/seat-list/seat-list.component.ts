import { Component, OnInit } from '@angular/core';
import { Room } from '../../../entities/room/room';
import { Seat } from '../../../entities/seat/seat';
import { RoomService } from '../../../services/room.service';
import { SeatService } from '../../../services/seat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrl: './seat-list.component.css'
})
export class SeatListComponent implements OnInit {

  room!: Room;
  seats!: Seat[];
  rooms: Room[] = [];

  constructor( private seatService: SeatService, private router: Router, private roomService: RoomService) {}

  ngOnInit(): void {
    this.getSeats();
  }

  getSeats() {
    this.seatService.getSeatsList().subscribe(data => {
      this.seats = data;
      this.getRooms();
    })
  }

  // Lấy danh sách các phong` chiếu
  getRooms() {
    this.roomService.getRoomsList().subscribe(data => {
      this.rooms = data;
    });
  }

  // Lấy thông tin phong chiếu theo roomId
  getRoomNameById(roomId: number): string {
    const room = this.rooms[roomId];
    return room ? room.name : 'Chưa xác định'; // Trả về tên phong` chiếu hoặc thông báo nếu không có
  }

  updateSeat(id: number) {
    this.router.navigate(['/seats/update', id]);
  }

  seatDetail(id: number) {
    this.router.navigate(['/seats', id]);
  }

  deleteSeat(id: number) {
    this.seatService.deleteSeat(id).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
      
    })
    this.getSeats();
  }

}
