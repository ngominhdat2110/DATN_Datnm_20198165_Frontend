import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../entities/customer/customer';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customers!: Customer[];

  constructor( private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomersList().subscribe(data => {
      this.customers = data;
    });
  }

  updateCustomer(id: number) {
    this.router.navigate(['customers/update', id]);
  }

  customerDetail(id: number) {
    this.router.navigate(['customers', id]);
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
      
    })
    this.getCustomers();
  }

}
