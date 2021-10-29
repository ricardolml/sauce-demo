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
    tax = 0;
    subtotal = 0;
    total = 0;
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
            this.subtotal += product.price;
        });
        this.tax = this.subtotal * 0.08;
        this.total = this.subtotal + this.tax;
    }

    finishOrder(): void{
        this.finish = true;
        this.carService.porcentCart.emit(101);
        this.carService.addPedido(this.order);
    }

}
