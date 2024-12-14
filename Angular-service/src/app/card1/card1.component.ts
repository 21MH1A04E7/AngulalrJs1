import { Component } from '@angular/core';
import { CardStoreService } from '../Services/card-store.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
  
  cardData:Array<any>;
  constructor(private cardService:CardStoreService ){
    this.cardData=cardService.cardArray;
  }
  
}
