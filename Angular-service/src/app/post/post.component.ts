import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  // providers:[PostService]
})
export class PostComponent {
  post:Array<any>;
  // 1st method 
  // constructor(){
  //   //creating instance of this class
  //   let postService=new PostService()
  //   this.post=postService.postArray
  // }

  // 2nd method using dependency injection
  //we have to give the provider for injection
  constructor(private postService:PostService){
    this.post=postService.postArray
  }
}
