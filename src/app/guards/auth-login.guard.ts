import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(): boolean {
        return this.check();
    }
    canLoad(): boolean {
        return this.check();
    }

    check(): boolean {
        if ((this.authService.user.id)) {
            return true;
        } else {
            this.router.navigateByUrl('/auth');
            return false;
        }
    }
}
