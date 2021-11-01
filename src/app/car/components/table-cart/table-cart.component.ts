import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../products/interfaces/product.interface';
import { CarService } from 'src/app/car/services/car.service';

@Component({
    selector: 'app-table-cart',
    templateUrl: './table-cart.component.html',
    styleUrls: ['./table-cart.component.scss']
})
export class TableCartComponent implements OnInit {

    @Input() carItems: Product[] = [];
    @Input() overview = false;

    constructor(private carService: CarService ) { }

    ngOnInit(): void {
    }

    removeCar( id: string ): void{
        this.carItems = this.carItems.filter( produc => produc.id !== id );
        this.carService.addRemoveItemCar(this.carItems );
    }

}
