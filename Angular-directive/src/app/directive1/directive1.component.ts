import { Component } from '@angular/core';

@Component({
  selector: 'app-directive1',
  templateUrl: './directive1.component.html',
  styleUrl: './directive1.component.css'
})
export class Directive1Component {
  postArray:Array<string>=['post1', 'post2', 'post3', 'post4']

  objArray:Array<any>=[
    {"id":"1", "title":"post1", "description":"description 1"},
    {"id":"2", "title":"post2", "description":"description 2"},
    {"id":"3", "title":"post3", "description":"description 3"},
    {"id":"4", "title":"post4", "description":"description 4"},
    {"id":"5", "title":"post5", "description":"description 5"}
  ]
  constructor(){
    for(let i=0;i<this.postArray.length;i++){
      // console.log(this.postArray[i])
    }
  }
}
