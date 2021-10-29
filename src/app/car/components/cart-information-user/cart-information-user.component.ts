import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';
import { ValidatorsService } from '../../../validators/validators.service';
import { Order } from '../../../orders/interface/order.interface';

@Component({
    selector: 'app-cart-information-user',
    templateUrl: './cart-information-user.component.html',
    styleUrls: ['./cart-information-user.component.scss']
})
export class CartInformationUserComponent implements OnInit, AfterViewInit {

    formInformation: FormGroup = this.fb.group({
        name: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        zip: ['', [Validators.required]],
        address: ['', [Validators.required]],
    });
    order!: Order;
    constructor(
        private carService: CarService,
        private router: Router,
        private fb: FormBuilder,
        private validatorService: ValidatorsService
    ) {
        this.order = this.carService.loadOrder();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.carService.porcentCart.emit(51);
        }, 500);
    }

    ngOnInit(): void {
        if (!this.order) {
            this.router.navigateByUrl('car');
            return;
        }

        this.formInformation.reset({
            ...this.order
        });
    }

    validateInput(name: string): boolean | null {
        return this.validatorService.validateRequire(this.formInformation, name);
    }

    continue(): void {
        if (this.formInformation.invalid) {
            return this.formInformation.markAllAsTouched();
        }

        this.order = { ...this.order, ...this.formInformation.getRawValue() };
        this.carService.order.emit(this.order);
        this.router.navigateByUrl('/car/cart-overview');
    }

}
