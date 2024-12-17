import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  role: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Phản hồi từ server:', response);  // Xem phản hồi thực tế từ server
        const role = response.role;
        if (role === 'admin') {
          this.router.navigate(['/admin/customers']);
        } else if (role === 'user') {
          this.router.navigate(['/movies-client']);
        }
      },
      error: (err) => {
        console.error('Đăng nhập thất bại:', err);
      }
    });
  }  
  
}
