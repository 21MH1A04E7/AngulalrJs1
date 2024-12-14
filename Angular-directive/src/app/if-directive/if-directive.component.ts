import { Component } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  templateUrl: './if-directive.component.html',
  styleUrl: './if-directive.component.css'
})
export class IfDirectiveComponent {
  objArray:Array<any>=[]
  objArray2:Array<any>=[]
  objArray3:Array<any>=[]

  constructor(){}
  addNew(){
    this.objArray.push({name: 'Value', value: (Math.random()*100).toFixed(4)})
  }
  deleteItem(index:number){
    this.objArray.splice(index,1)
  }
  addNew2(){
    this.objArray2.push({name: 'Value', value: (Math.random()*100).toFixed(4)})
  }
  deleteItem2(index:number){
    this.objArray2.splice(index,1)
  }

  addNew3(){
    this.objArray3.push({name: 'Value', value: (Math.random()*100).toFixed(4)})
  }
  deleteItem3(index:number){
    this.objArray3.splice(index,1)
  }
}
