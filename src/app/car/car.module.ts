import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './pages/car/car.component';
import { SharedModule } from '../shared/shared.module';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartInformationUserComponent } from './components/cart-information-user/cart-information-user.component';
import { CartOverviewComponent } from './components/cart-overview/cart-overview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableCartComponent } from './components/table-cart/table-cart.component';


@NgModule({
  declarations: [CarComponent, CartDetailsComponent, CartInformationUserComponent, CartOverviewComponent, TableCartComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
