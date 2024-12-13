import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/datn/v1/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const loginData = { username, password };
    
    return this.http.post<any>('http://localhost:8080/datn/v1/login', loginData);
  }
  
}
