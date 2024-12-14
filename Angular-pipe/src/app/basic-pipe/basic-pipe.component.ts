import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pipe',
  templateUrl: './basic-pipe.component.html',
  styleUrl: './basic-pipe.component.css'
})
export class BasicPipeComponent {
  name:string='Hariom Kumar'
  city:string='Mejorganj'
  dcValue:number=3.534455
  value:number=1646513
  price:number=99.562
  today:Date=new Date()
  postObj:object={
    id:1,
    title:'Sample Post',
    content:'This is a sample post'
  }
  postArray:Array<string>=[
    'Post 1',
    'Post 2',
    'Post 3',
    'Post 4'
  ]
  userDetails:any={
    'name':'John Doe',
    'age':30,
    'address':{
      'street':'123 Main St',
      'city':'New York',
      'state':'NY'
    }
  }
  constructor(){}
}
