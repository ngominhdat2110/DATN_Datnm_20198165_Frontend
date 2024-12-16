import { Component, OnInit } from '@angular/core';
import { Customer} from '../../../entities/customer/customer';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss'
})
export class CreateCustomerComponent implements OnInit{

  customer: Customer = new Customer();
  
  constructor(private customerService : CustomerService, private router : Router) {}

  ngOnInit(): void {
    
  }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe( {
      next: data => console.log(data),
      error: error => console.log(error)
    } )
    this.goToCustomerList()
  }

  goToCustomerList() {
    this.router.navigate(['/admin/customers']);
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer()
  }

}
