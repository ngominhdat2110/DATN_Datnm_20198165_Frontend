export class Ticket {
    id!: number;             // ID của vé (sử dụng số nguyên)
    userId!: number;         // ID của người dùng
    movieId!: number;        // ID của phim
    theaterId!: number;      // ID của rạp chiếu
    roomId!: number;         // ID của phòng chiếu
    seatId!: number[];         // ID của ghế ngồi
    movieTheaterId!: number;             // Thời gian xem phim
    status!: number;         // Trạng thái của vé (1: đã mua, 0: chưa mua, v.v.)
}