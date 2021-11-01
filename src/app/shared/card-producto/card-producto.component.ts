import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../products/interfaces/product.interface';

@Component({
    selector: 'app-card-producto',
    templateUrl: './card-producto.component.html',
    styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent implements OnInit {

    @Output() add: EventEmitter<Product> = new EventEmitter();
    @Output() remove: EventEmitter<string> = new EventEmitter();

    @Input() product!: Product;
    @Input() have = false;
    @Input() index = 0;
    @Input() numTrunacte = 100;
    @Input() detailCart = false;
    @Input() styleCard = 'max-width: 600px;';
    @Input() overview = false;
    showTextComplete = false;
    constructor( private router: Router) { }

    ngOnInit(): void {
    }

    addCar(): void{
        this.add.emit( this.product );
    }
    removeCar(): void {
        this.remove.emit( this.product.id );
    }

    detailProduct(): void{
        this.router.navigate( ['/products/product-detail', this.product.id] );
    }

}
