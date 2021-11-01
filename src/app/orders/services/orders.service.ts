import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../interface/order.interface';
import { User } from '../../auth/interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    idUser: string;

    constructor(private firebase: AngularFirestore, private authService: AuthService) {
        this.idUser = this.authService.user.id;
    }

    getOrders(): Observable<Order[]>{
        return this.firebase.collection('users').doc<User>(this.idUser).valueChanges().pipe( map( person => person?.orders || [] ) );
    }

}
