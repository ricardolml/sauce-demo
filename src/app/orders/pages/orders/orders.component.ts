import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../../interface/order.interface';
import { OrdersService } from '../../services/orders.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

    constructor( private ordersService: OrdersService) { }

    itemsMenu = [
        {
            ruta: '/orders',
            name: 'Orders',
        },
    ];

    orders: Order[] = [];
    suscription!: Subscription;

    ngOnInit(): void {
        this.ordersService.getOrders().subscribe( resp => this.orders = resp );
    }

    ngOnDestroy(): void {
        this.suscription?.unsubscribe();
    }

}
