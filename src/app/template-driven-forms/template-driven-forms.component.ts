import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  submitForm(userForm:NgForm){
    console.log(userForm.value);
    
  }

  getValue(fullName:FormControl){
    console.log(fullName);
  }

}
