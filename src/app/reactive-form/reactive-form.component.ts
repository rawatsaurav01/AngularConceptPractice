import { Component } from '@angular/core';

import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form:any;
  emailRegex:string="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";

  contactRegex:string="[789][0-9]{9}"

  constructor(){

    this.form=new FormGroup({
      fullName:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl("",[Validators.required,
        // Validators.pattern(this.emailRegex)
        Validators.email //it will achieve the same pattern like validation
      ]),

      contactDetails:new FormGroup({
        contactNumber:new FormControl('',
        [Validators.required,Validators.pattern(this.contactRegex)]),
        shippingAddress:new FormControl('',[Validators.required]),
        address:new FormControl("",[Validators.required])
      })
      
    });
  }

  get fullname(){
    return this.form.get('fullName');
  }

  get Email(){
    return this.form.get('email');
  }

  get ContactNumber(){
    return this.form.get('contactDetails.contactNumber');
  }


  get Address(){
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress(){
    return this.form.get('contactDetails.shippingAddress');
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
