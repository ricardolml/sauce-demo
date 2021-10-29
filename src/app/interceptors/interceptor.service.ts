import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = new HttpHeaders({
        });

        const reqClone = req.clone({
            headers
        });
        console.log('interceptor');
        return next.handle( req ).pipe(
            catchError( err => this.manejarError(err) )
        );
    }

    manejarError( error: HttpErrorResponse ){
        return throwError(error);
    }
}
