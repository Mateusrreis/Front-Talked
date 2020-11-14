import { Directive, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { stringify } from 'querystring';

@Directive({
  selector: '[appPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordDirectiveDirective, multi: true }]
})
export class PasswordDirectiveDirective implements Validator {

  @Input("appPassword") pwd: string;
  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {

    let cont = Object.entries(formGroup.controls).length;
    if (cont > 0) {
      if (formGroup.controls.pwdConfirm != undefined) {
        if (formGroup.controls.pwd.value == formGroup.controls.pwdConfirm.value) {
          return null;
        }
        else {
          return { erroConfirmPwd: true };
        }
      }
    }

  }

}



