import { Component } from '@angular/core';
import { CardStoreService } from '../Services/card-store.service';
@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.css'
})
export class Card2Component {
  cardData: Array<any> ;
 constructor(private cardService:CardStoreService ){
  this.cardData = cardService.cardArray
 }
 addCard(){
  let card={
    id:8,
    titleCard:"Card 8",
    description:"description 8",
  }
  this.cardService.addNewCard(card)
 }
 onDelete(index:number){
  this.cardService.deleteCard(index)
 }
}
