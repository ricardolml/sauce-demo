import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor( private firebase: AngularFirestore ) { }

    getProductos(): Observable<Product[]> {
        return this.firebase.collection<Product>('products', ref => ref.orderBy('name', 'asc') ).valueChanges();
    }
    getProduct(id: string): Observable<Product | undefined>{
        return this.firebase.collection('products').doc<Product>(id).valueChanges();
    }
}
