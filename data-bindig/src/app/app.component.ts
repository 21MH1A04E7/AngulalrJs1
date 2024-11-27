import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-bindingtwo';
  imageUrl='https://images.pexels.com/photos/27576233/pexels-photo-27576233/free-photo-of-a-person-walking-on-a-grassy-hill-near-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  bool:boolean=true;// only class is applicable when the value is true
  
  constructor(){}
  buttonClick(){
    console.log('buttonClick')
  }
  onKeyup($event:KeyboardEvent):void{
    // console.log('keyUp is working')
    console.log($event.keyCode)
    if($event.keyCode===13){
      console.log('Enter key pressed')
    }
  }
  //in angular to handle
  onKeyupEvent():void{
    console.log('pressed Enter key')
  }
  onKeyupEventTemplate(myInput:string|any):void{
    console.log(myInput);
  }
}
