import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

//importing custom validator
import { noSpace } from '../Validators/nospace.validators'; 
@Component({
  selector: 'app-custom-validation',
  templateUrl: './custom-validation.component.html',
  styleUrls: ['./custom-validation.component.css']
})
export class CustomValidationComponent {

  form: any;
  constructor(private fb: FormBuilder) {

    this.form = fb.group({

      username: ['', [
        Validators.required,
        Validators.minLength(5),
        noSpace.noSpaceValidation
      ]],
      password: [
        '', [
          Validators.required]
      ]

    });
  }

  get fc(){
    return this.form.controls;
  }



}
