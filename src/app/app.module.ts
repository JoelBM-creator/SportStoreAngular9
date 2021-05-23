import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFistGuard } from './storeFirst.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
        canActivate: [StoreFistGuard],
      },
      {
        path: 'cart',
        component: CartDetailComponent,
        canActivate: [StoreFistGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [StoreFistGuard],
      },
      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [StoreFistGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
