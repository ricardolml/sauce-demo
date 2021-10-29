import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../auth/interfaces/user.interface';
import { Product } from '../../products/interfaces/product.interface';
import { AuthService } from '../../auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/orders/interface/order.interface';
@Injectable({
    providedIn: 'root'
})
export class CarService {

    porcentCart = new EventEmitter<number>();

    order = new EventEmitter<Order>();
    idUser: string;

    constructor( private firebase: AngularFirestore, private authService: AuthService, private http: HttpClient ) {
        this.idUser = this.authService.user.id;
    }

    getItemCar(): Observable<Product[]>{
        return this.firebase.collection('users').doc<User>(this.idUser).valueChanges().pipe( map( person => person?.car || [] ) );
    }

    addRemoveItemCar(car: Product[]): void {
        if ( car.length === 0){
            this.clarStorageOrder();
        }
        this.firebase.collection('users').doc(this.idUser).update( { car } );
    }

    saveStorage(order: Order): void{
        localStorage.setItem('order' , JSON.stringify(order) );
    }

    loadOrder(): Order{
        return localStorage.getItem('order') ? JSON.parse( localStorage.getItem('order') ||  '{}') : undefined;
    }

    clarStorageOrder(): void{
        localStorage.removeItem('order');
    }

    addPedido(order: Order): void {
        this.addRemoveItemCar([]);
        this.authService.user.orders.push(order);
        const orders = this.authService.user.orders;
        this.firebase.collection('users').doc(this.idUser).update( { orders } );
    }

}
