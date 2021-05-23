import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cartSummary.component.html',
})
export class CartSummayComponent {
  constructor(public cart: Cart) {}
}
