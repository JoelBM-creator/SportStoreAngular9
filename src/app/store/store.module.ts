import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummayComponent } from './cartSummany.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummayComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  exports: [StoreComponent],
})
export class StoreModule {}
