import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'conceptPractice';

}
