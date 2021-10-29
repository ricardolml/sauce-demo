import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: User;

    constructor( private firebase: AngularFirestore , private router: Router ) {
        this.user = this.loadingStorage();
    }

    getUser( user: string , password: string ): Observable<User[]>{
        return this.firebase.collection<User>('users',
                ref => ref.where('user', '==', user)
                        .where('password', '==' , password)
        ).valueChanges();
    }

    getInfoSesion(): User{
        return {...this.user};
    }

    saveStorage( user: User ): void{
        localStorage.setItem( 'user' , JSON.stringify(user) );
        this.user = user;
    }

    async logout(): Promise<void>{
        localStorage.clear();
        this.user = this.loadingStorage();
        this.router.navigateByUrl('/auth');
    }

    loadingStorage(): User{
        return localStorage.getItem('user') ? JSON.parse( localStorage.getItem('user') || '{}' ) : {};
    }

}
