import { Component } from '@angular/core';

import { FormGroup,FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  form:any;
  emailRegex:string="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";

  contactRegex:string="[789][0-9]{9}"


  /** FormBuilder 
  
  constructor(fb:FormBuilder){

    this.form=fb.group({
      fullName:['',[
        Validators.required,
        Validators.minLength(5)
      ]],

      email:['',[
        Validators.required,
        Validators.email
      ]],

      contactDetails:fb.group({
        address:['',Validators.required],
        shippingAddress:['',Validators.required],
        contactNumber:['',[
          Validators.required,
          Validators.pattern(this.contactRegex)
        ]]
      }),
      skills:fb.array([])
    })
  }


  */

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
      }),
      
      skills:new FormArray([])
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


  addSkills(skills:HTMLInputElement){
    (this.form.get('skills') as FormArray).push(
      new FormControl(skills.value)
    );
    
    skills.value='';
    console.log(this.form.value);
  }

  get Skills(){
    return this.form.get('skills');
  }

  removeSkill(index){
    this.Skills.removeAt(index);
  }
}
