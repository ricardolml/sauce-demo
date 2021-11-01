import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './products/pages/home/home.component';
import { CarComponent } from './car/pages/car/car.component';
import { AuthLoginGuard } from './guards/auth-login.guard';
import { AuthLogoutGuard } from './guards/auth-logout.guard';

const routes: Routes = [
    {
        path : 'auth',
        loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule ),
        canActivate: [AuthLogoutGuard],
        canLoad: [AuthLogoutGuard]
    },
    {
        path : 'products',
        component : HomeComponent,
        loadChildren : () => import('./products/producs.module').then( m => m.ProducsModule ),
        canActivate: [AuthLoginGuard],
        canLoad: [AuthLoginGuard]
    },
    {
        path : 'car',
        component : CarComponent,
        loadChildren : () => import('./car/car.module').then( m => m.CarModule ),
        canActivate: [AuthLoginGuard],
        canLoad: [AuthLoginGuard]
    },
    {
        path : 'orders',
        loadChildren : () => import('./orders/orders.module').then( m => m.OrdersModule ),
        canActivate: [AuthLoginGuard],
        canLoad: [AuthLoginGuard]
    },
    {
        path : '**',
        redirectTo : 'auth'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
