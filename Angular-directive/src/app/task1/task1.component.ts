import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css',
})
export class Task1Component {
  name: string = '';
  email: string = '';
  address: string = 'Address...';
  arrayObject: { name: string; address: string; email: string }[] = [];
  constructor() {}
  onSave() {
    if(this.name==''||this.email=='') return;
    this.arrayObject.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    this.name = '';
    this.email = '';
    this.address = 'Address...';
    // console.log(this.arrayObject);
  }
  onDelete(i:number){
    this.arrayObject.splice(i,1);
  }
}
