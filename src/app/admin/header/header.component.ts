import { Component, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Các mảng thể loại và ngôn ngữ
  genres = ['Hành động', 'Hài hước', 'Kinh dị', 'Lãng mạn', 'Hoạt hình'];
  languages = ['Tiếng Việt', 'Tiếng Anh', 'Tiếng Hàn', 'Tiếng Nhật'];

  // Biến lưu giá trị tìm kiếm và thể loại, ngôn ngữ đã chọn
  searchQuery: string = '';
  selectedGenre: string = '';
  selectedLanguage: string = '';

  isScrolled = false;

  // Hàm gọi khi mở sidebar
  toggleSidebar() {
    // Logic mở sidebar nếu có
  }

  @HostListener('window:scroll')  /* Lắng nghe sự kiện cuộn của cửa sổ */
  scrollEvent() {   /* Hàm này được gọi khi sự kiện cuộn xảy ra. Nó kiểm tra vị trí cuộn */
    this.isScrolled = window.scrollY >= 30; /* Nếu giá trị lớn hơn hoặc bằng 30, isScrolled sẽ được đặt thành true, giúp thay đổi giao diện của thanh điều hướng */
  }
}