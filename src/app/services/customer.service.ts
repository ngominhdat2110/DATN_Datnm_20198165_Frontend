import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../entities/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "http://localhost:8080/datn/v1/customers";
  // private signUpURL = "http://localhost:8080/datn/v1/customers/signup";

  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  // createCustomer(customer : Customer): Observable<Object> {
  //   return this.httpClient.post(`${this.signUpURL}`, customer);
  // }

  createCustomer(customer : Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/signup`, customer);
  }

  getCustomerById(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`)
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
