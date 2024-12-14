import { Component } from '@angular/core';

@Component({
  selector: 'app-change-directive1',
  templateUrl: './change-directive1.component.html',
  styleUrl: './change-directive1.component.css'
})
export class ChangeDirective1Component {
  objArray:Array<any>=[
    {"id":"1", "title":"post1", "description":"description 1"},
    {"id":"2", "title":"post2", "description":"description 2"},
    {"id":"3", "title":"post3", "description":"description 3"},
    {"id":"4", "title":"post4", "description":"description 4"},
    {"id":"5", "title":"post5", "description":"description 5"}
  ]

  constructor(){}
  addNew(){
    this.objArray.push({"id":(this.objArray.length+1).toString(), "title":"post6", "description":"description"});
  }
  // handleDelete(item:any){
  //   let index=this.objArray.indexOf(item)
  //   this.objArray.splice(index,1);
  // }
  handleDelete1(i:number){
    this.objArray.splice(i,1);
  }
}
