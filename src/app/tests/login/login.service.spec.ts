import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from '../../auth/services/auth.service';
import { environment } from '../../../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../../auth/interfaces/user.interface';

describe('LoginService', () => {
    let service: AuthService;
    const user: User[] = [];
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AngularFireModule.initializeApp(environment.firebase),
                RouterTestingModule
            ]
        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('User valid - should return a user', ( done ) => {
        const userName = 'standard_user';
        const password = 'secret_sauce';
        service.getUser( userName, password ).subscribe( resp => {
            expect(resp.length).toBe(1);
            done();
        });
    });

    it('User invalid - should not return a user', ( done ) => {
        const userName = 'standard';
        const password = 'secret_sauce';
        service.getUser( userName, password ).subscribe( resp => {
            expect(resp.length).toBe(0);
            done();
        });
    });
});
