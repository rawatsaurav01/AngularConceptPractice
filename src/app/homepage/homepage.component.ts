import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit{

  
  bool:boolean=true;

  userName:string='';

  constructor(private router:Router){}

  title = 'conceptPractice';
  parentMessage:string="Message from parent";

  message:string;

  fromChildOutput:string;

  @ViewChild(PostComponent) childComponent;

  ngAfterViewInit(){
    console.log(this.childComponent.childMessage);
    this.message=this.childComponent.childMessage;
    
  }

  receiveMessage($event){
    // console.log($event);
    this.fromChildOutput=$event;
    
  }

  onKeyup(){
    console.log("keyup triggered");
  }

  onKeyupAdv($event){

    if($event == 13){
      console.log("Enter key pressed");
    }
  }

  onKeyupTemplateVariable($event){
    console.log($event.target.value);
  }
  onKeyupTemplateVariableAngular(username){
    console.log(username);
  }

  onKeyup2way(){
      console.log(this.userName);
      
  }

  assignment(){
    this.router.navigate(['assignment']);
  }
  pipes(){
    this.router.navigate(['pipes']);
  }

  templateDrivenForm(){
    this.router.navigate(['templatedrivenforms']);

  }

  reactiveForm(){
    this.router.navigate(['reactiveform']);
  }
  
}
