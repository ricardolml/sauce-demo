import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { ValidatorsService } from 'src/app/validators/validators.service';
import { AuthService } from '../../auth/services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../../environments/environment';
import { AuthRoutingModule } from '../../auth/auth-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ImgPipe } from '../../shared/pipes/img.pipe';

describe('Tests LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                LoginComponent,
                ImgPipe
            ],
            imports: [
                ReactiveFormsModule,
                AngularFireModule.initializeApp(environment.firebase),
                AuthRoutingModule,
                RouterTestingModule
            ],
            providers: [ ValidatorsService, AuthService]
        });


    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create' , () => {
        expect(component).toBeTruthy();
    });

    it('Should create a form with 2 fields, user - password', () => {
        expect( component.loginForm.contains('user') ).toBeTruthy();
        expect( component.loginForm.contains('password') ).toBeTruthy();
    });

    it('The user should be obligatory', () => {
        const control = component.loginForm.get('user');
        control?.setValue('');
        expect( control?.valid ).toBeFalse();
    });

    it('The password should be obligatory', () => {
        const control = component.loginForm.get('password');
        control?.setValue('');
        expect( control?.valid ).toBeFalse();
    });

    it('The form has to be invalid', () => {
        const control = component.loginForm;
        control.get('user')?.setValue('');
        control.get('password')?.setValue('');

        expect( control.valid ).toBeFalse();
    });

    it('The form has to be valid', () => {
        const control = component.loginForm;
        control.get('user')?.setValue('standard_user');
        control.get('password')?.setValue('secret_sauce');
        expect( control.valid ).toBeTruthy();
    });

});
