import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartInformationUserComponent } from './components/cart-information-user/cart-information-user.component';
import { CartOverviewComponent } from './components/cart-overview/cart-overview.component';

const routes: Routes = [
    {
        path : 'cart-detail',
        component: CartDetailsComponent,
    },
    {
        path: 'cart-information-user',
        component: CartInformationUserComponent
    },
    {
        path: 'cart-overview',
        component: CartOverviewComponent
    },
    {
        path: '**',
        redirectTo : 'cart-detail'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
