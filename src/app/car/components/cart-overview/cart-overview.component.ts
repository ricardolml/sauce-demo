import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Order } from '../../../orders/interface/order.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart-overview',
    templateUrl: './cart-overview.component.html',
    styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent implements OnInit, AfterViewInit {

    order!: Order;
    
    finish = false;

    constructor(private carService: CarService, private router: Router) {
        this.order = this.carService.loadOrder();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.carService.porcentCart.emit(75);
        }, 500);
    }

    ngOnInit(): void {
        if (!this.order) {
            this.router.navigateByUrl('car');
            return;
        }

        this.order.products.forEach( product => {
            this.order.subtotal += product.price;
        });
        this.order.tax = this.order.subtotal * 0.08;
        this.order.total = this.order.subtotal + this.order.tax;
    }

    finishOrder(): void{
        this.finish = true;
        this.carService.porcentCart.emit(101);
        this.carService.addPedido(this.order);
    }

}
