// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  // Hàm gọi khi mở sidebar
  toggleSidebar() {
    // Logic mở sidebar nếu có
  }
}