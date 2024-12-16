import {Component, EventEmitter, HostListener, Output} from '@angular/core';
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
  // ,imports: [
  //   MatMenuModule,
  //   RouterLinkActive,
  //   NgOptimizedImage,
  //   RouterLink,
  //   MatIconModule,
  //   NgForOf,
  //   MatAnchor,
  //   MatIconButton
  // ]
  // , standalone: true
})
export class NavbarComponent {

  isScrolled = false;

  @HostListener('window:scroll')  /* Lắng nghe sự kiện cuộn của cửa sổ */
  scrollEvent() {   /* Hàm này được gọi khi sự kiện cuộn xảy ra. Nó kiểm tra vị trí cuộn */
    this.isScrolled = window.scrollY >= 30; /* Nếu giá trị lớn hơn hoặc bằng 30, isScrolled sẽ được đặt thành true, giúp thay đổi giao diện của thanh điều hướng */
  }

  constructor() {}
}
