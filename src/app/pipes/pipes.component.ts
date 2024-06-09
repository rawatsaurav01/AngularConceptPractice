import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  money:number=10000000;

  today:Date=new Date();

  userDetails={
    name:"Saurav",
    city:"Berinag",
    phoneNumber:'9133333444'
    
  }

  text:string=`I added li items but the last item is leaving the navbar and getting below it [newline], 
  I want them to style in such a manner that they all will appear in single Line inside navbar I am a 
  noob, a little explanation would be appreciated... Thank you Here is my code HTML CODE:`;
}
