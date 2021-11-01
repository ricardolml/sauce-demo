import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/interfaces/user.interface';
import { CarService } from 'src/app/car/services/car.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    @Input() itemsMenu  = [
        {
            ruta: '',
            name: '',
        }
    ];
    @Input() showCar = false;
    userInfo: User;
    itemsCar = 0;
    suscription!: Subscription;
    constructor( private authService: AuthService, private carService: CarService ) {
        this.userInfo = this.authService.user;
    }
    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }

    ngOnInit(): void {
        this.suscription = this.carService.getItemCar().subscribe(
            resp => this.itemsCar = resp.length
        );
    }

    logout(): void{
        this.authService.logout();
    }

}
