import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../entities/customer/customer';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit {
  
  id!: number;
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private route : ActivatedRoute,
    private router: Router){  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(
      {
        next: data  => this.customer = data,
        error: error => console.error(error)
      }
    )
  }

  onSubmit() {
    this.customerService.updateCustomer(this.id, this.customer).subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
    })
    this.goToCustomerList();
  }

  goToCustomerList() {
    this.router.navigate(['/customers']);
  }

}
