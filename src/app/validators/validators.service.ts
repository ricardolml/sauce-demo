import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorsService {

    constructor() { }

    validateRequire( form: FormGroup, campo: string ): boolean | null {
        return form.controls[campo].errors && form.controls[campo].touched;
    }
}
