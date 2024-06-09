import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  childMessage:string="Message from Post.ts file ( child component )";

  outputChildMessage:string="Message from the child via @output decorator";

  @Input() fromParent:string;


  @Output() messageEvent=new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
    
  }


  
}
