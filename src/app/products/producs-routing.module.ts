import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
    {
        path : 'inventory',
        component: InventoryComponent
    },
    {
        path: 'product-detail/:id',
        component: ProductDetailComponent
    },
    {
        path : '**',
        redirectTo : 'inventory'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducsRoutingModule { }
