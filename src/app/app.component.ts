import { Component } from '@angular/core';
import { Post } from './create-post.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A Forum or Some Odd Thing';

  masterCreatePost: Post[]=[];
}
