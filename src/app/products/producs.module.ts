import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducsRoutingModule } from './producs-routing.module';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
// import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



@NgModule({
    declarations: [
        HomeComponent,
        InventoryComponent,
        // CardProductoComponent,
        SortPipe,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProducsRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class ProducsModule { }
