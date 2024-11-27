import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  childOutput:string='';
  title = 'data-passing';
  parentMessage:string='message comming from parent app componets'
  @ViewChild(PostComponent) childComponent:any;

  message:string='';
  constructor(){}
  ngAfterViewInit(){
    console.log(this.childComponent)
    this.childOutput=this.childComponent.messageFromChild
  }
  reciveMessage($event:any):void{
    console.log($event)
    this.message=$event;

  }
}
