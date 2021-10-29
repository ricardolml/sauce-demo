import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CarService } from '../../services/car.service';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnDestroy {

    suscription!: Subscription;
    carPorcent = 0;
    itemsMenu = [
        {
            ruta: '/car',
            name: 'YOUR CART',
        },
    ];

    constructor(private carService: CarService) { }

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }

    ngOnInit(): void {
        this.suscription = this.carService.porcentCart.subscribe(
            porcent => this.carPorcent = porcent
        );
        this.carService.order.subscribe(
            order => this.carService.saveStorage(order)
        );
    }

    pocent(): string{
        return `width: ${this.carPorcent}%;`;
    }

}
