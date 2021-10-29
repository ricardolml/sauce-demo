import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../validators/validators.service';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    // user: User = {};
    loading = false;
    error = false;

    suscription!: Subscription;

    loginForm: FormGroup = this.fb.group({
        user : ['' , [ Validators.required ]  ],
        password : ['' , [ Validators.required ] ]
    });

    constructor( private fb: FormBuilder, private validator: ValidatorsService, private authService: AuthService, private router: Router 
    ) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.suscription.unsubscribe();
    }

    validateInput(name: string): boolean|null{
        return this.validator.validateRequire( this.loginForm , name );
    }

    login(): void{
        if ( this.loginForm.invalid ){
            return this.loginForm.markAllAsTouched();
        }

        const { user , password } = this.loginForm.getRawValue();
        this.loading = true;
        this.suscription = this.authService.getUser( user , password).subscribe( resp => {
            this.loading = false;
            if ( resp.length > 0){
                const respUser = resp[0];
                delete respUser.password;
                this.authService.saveStorage(respUser);
                this.router.navigateByUrl('products');
            }else{
                this.error = true;
            }
        });
    }

}
