import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import {Post} from '../models/post'
@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrl: './post2.component.css',
  // providers:[PostService]
})
export class Post2Component {
  post:Array<any>;
  constructor(private postService: PostService){
    this.post=postService.postArray;
  }
  addNewData(){
    let newPost:Post={
      id:8,
      postTitle:'post 8'
    }
    this.postService.addPost(newPost);
  }
}
// we can directly give the provider in app component 
