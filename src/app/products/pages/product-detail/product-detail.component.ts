import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Product } from '../../interfaces/product.interface';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

    suscription!: Subscription;
    product!: Product;
    constructor(private params: ActivatedRoute, private productsServices: ProductsService, private router: Router) {

    }
    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }

    ngOnInit(): void {
        this.suscription = this.params.params.pipe(
            switchMap( id => this.productsServices.getProduct( id.id )  )
        ).subscribe( resp => {
            // console.log(resp);
            if ( resp ){
                this.product = resp;
            }else{
                this.router.navigateByUrl('/products');
            }
        });
    }

}
