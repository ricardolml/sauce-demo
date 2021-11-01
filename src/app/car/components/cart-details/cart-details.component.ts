import { Component, OnDestroy, OnInit, Output, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Subscription } from 'rxjs';
import { Product } from '../../../products/interfaces/product.interface';
import { Order } from '../../../orders/interface/order.interface';

@Component({
    selector: 'app-cart-details',
    templateUrl: './cart-details.component.html',
    styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit, OnDestroy, AfterViewInit {

    carItems: Product[] = [];
    suscription!: Subscription;
    loading = true;
    order: Order = {
        name: '',
        lastName: '',
        address: '',
        subtotal: 0,
        tax: 0,
        total: 0,
        date: new Date(),
        products: []
    };
    constructor(private carService: CarService , private router: Router) { }

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.carService.porcentCart.emit(0);
        }, 500);
    }

    ngOnInit(): void {
        this.suscription = this.carService.getItemCar().subscribe(
            resp => {
                this.carItems = resp;
                this.loading = false;
            }
        );
    }

    continue(): void {
        this.order.products = this.carItems;
        this.carService.order.emit(this.order);
        this.router.navigateByUrl('/car/cart-information-user');
    }

}
