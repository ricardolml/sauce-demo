import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from 'src/app/car/services/car.service';

@Injectable({
    providedIn: 'root'
})
export class NextCartGuard implements CanActivate {
    constructor(private cartService: CarService){}
    canActivate(): boolean {
        return ( !this.cartService.loadOrder ) ? true : false;
    }
}
