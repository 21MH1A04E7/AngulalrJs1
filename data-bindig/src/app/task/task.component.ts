import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title:string=''
  description:string=''
  constructor(){}
  handleTitle(){
    console.log(this.title);
  }
  handleDescription(){
    console.log(this.description);
  }
}
