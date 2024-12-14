import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardStoreService {

  constructor() { }
  // Add your methods here
  cardArray:Array<any> = [
    {id:1,titleCard:'Card 1',description: 'description 1'},
    {id:2,titleCard:'Card 2',description: 'description 2'},
    {id:3,titleCard:'Card 3',description: 'description 3'},
    {id:4,titleCard:'Card 4',description: 'description 4'},
    {id:5,titleCard:'Card 5',description: 'description 5'},
    {id:6,titleCard:'Card 6',description: 'description 6'},
    {id:7,titleCard:'Card 7',description: 'description 7'},
  ]
  addNewCard(value:object){
    this.cardArray.push(value);
  }
  deleteCard(index:number){
    this.cardArray.splice(index,1);
  }
}
