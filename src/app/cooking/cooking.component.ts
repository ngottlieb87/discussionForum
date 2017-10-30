import { Component, Output, EventEmitter} from '@angular/core';
import { Post } from '.././create-post.model';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css'],
  template: `

  <div class="well">
  <h1 id= "addPost">Add New Cooking Post</h1>
  <table class="table">
    <tbody>
      <tr>
        <td><label>Add User Name</label> <input #newPostUserName></td>
        <td><label>Post Name</label> <input #newPostPostName></td>
        <td><label>Forum Name</label> <input #newPostForumName></td>
        <td> <label>Post</label> <input #newPostPost></td>
      </tr>
    </tbody>
    <button (click)="createPost(newPostUserName.value, newPostPostName.value, newPostForumName.value, newPostPost>Create Post); newPostUserName.value=''; newPostPostName.value =''; newPostForumName.value=''; newPostPost.value='';"</button>
  </table>
</div>

  `

})
export class CookingComponent {
  masterCreatePost: Post[]=[];
  @Output() newPostSender = new EventEmitter();

  createPost(userName:string, postName: string, forumName:string, post: string){
    let newPostToAdd: Post = new Post(userName,postName,forumName,post);
    this.newPostSender.emit(newPostToAdd);
  }

  addPost(newPostFromChild: Post){
    this.masterCreatePost.push(newPostFromChild);
  }
}
