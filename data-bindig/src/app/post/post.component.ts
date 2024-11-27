import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  userName:string='';
  textValue:string='value comming from the component';
  textValue2:string='value comming from the component';
  constructor(){}
  handleButtonClick(fieldInput:string){
    console.log(fieldInput);
    console.log('clicked')
  }
  handleonKeyup(){
    console.log(this.userName);
    console.log('clicked');
  }
  handleValue(){
    console.log(this.textValue);
    // value will be remain same 
  }
  handleValue2(){
    console.log(this.textValue2);
    // value will be updated with 'updated value' two way data binging from the component
  }
}
