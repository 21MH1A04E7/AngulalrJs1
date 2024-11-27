import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() fromParent:string=''; // data is reciving from parent app component
  messageFromParentPost:string='comming from the messageFromParentPost'

  messageFromChild='message from child';

  outputChildMesssage:string='Message from child via output'
  @Output() messageEvent=new EventEmitter();
  constructor(){}
  ngOnInit():void {
  
  }
  sendMessage():void{
    console.log('clicked')
    this.messageEvent.emit(this.outputChildMesssage);
  }
}
