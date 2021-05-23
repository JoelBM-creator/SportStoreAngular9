import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
  templateUrl: 'checkout.component.html',
  styleUrls: ['checkout.component.scss'],
})
export class CheckoutComponent {
  orderSent = false;
  submitted = false;
  constructor(public repository: OrderRepository, public order: Order) {}
  submitedOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
