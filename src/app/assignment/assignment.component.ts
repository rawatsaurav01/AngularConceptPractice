import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  postTitle:string;
  postDescription:string;
  imageURL:string;
  postURL:string;
  changeBackground:boolean=false;

}
