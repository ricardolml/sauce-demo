import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { filterTypes } from '../../types/filterTypes';
import { AuthService } from '../../../auth/services/auth.service';
import { CarService } from 'src/app/car/services/car.service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

    typesFilter = filterTypes;
    filter = '';
    products: Product[] = [];
    itemsCar: Product[] = [];


    constructor( private productsService: ProductsService, private carService: CarService ) { }

    ngOnInit(): void {
        this.productsService.getProductos().subscribe(
            resp => this.products = resp
        );
        this.carService.getItemCar().subscribe( resp => this.itemsCar = resp );
    }

    changeFilter(value: any): void{
        this.filter = value.target.value;
    }

    haveCar(id: string): boolean{
        return (this.itemsCar.find( product => product.id === id ) ? true : false);
    }

    addCar( product: Product): void{
        this.itemsCar.push( product);
        this.carService.addRemoveItemCar(this.itemsCar );
    }

    removeCar( id: string ): void{
        this.itemsCar = this.itemsCar.filter( produc => produc.id !== id );
        this.carService.addRemoveItemCar(this.itemsCar );
    }

}
