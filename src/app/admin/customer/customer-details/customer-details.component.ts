import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../entities/customer/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit{
  id!: number;
  customer: Customer = new Customer();

  constructor(private route: ActivatedRoute,
    private customerService: CustomerService
  ){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data => this.customer = data)
  }

}
