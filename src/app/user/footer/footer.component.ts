import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  // imports: [
  //   NgForOf,  /* Directive dùng để lặp qua một mảng và tạo ra các phần tử tương ứng trong template */
  //   NgOptimizedImage  /* Directive giúp tối ưu hóa việc tải hình ảnh trong Angular, có thể giúp cải thiện hiệu suất */
  // ]
  // ,standalone: true
})
export class FooterComponent {

  socialData = [
    {url: 'https://twitter.com/', name: 'Twitter', img: './assets/svg/twitter.svg'},
    {url: 'https://github.com/ngominhdat2110', name: 'Github', img: './assets/svg/github.svg'}
  ];

  constructor() { }
}
