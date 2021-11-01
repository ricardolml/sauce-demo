import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
    {
        path: 'orders',
        component: OrdersComponent,
    },
    {
        path: '**',
        redirectTo: 'orders'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
