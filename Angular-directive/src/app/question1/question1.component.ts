import { Component } from '@angular/core';
import { MasterService } from '../service/master.service';
import { Item } from '../service/data';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrl: './question1.component.css'
})
export class Question1Component {
  data:Item[];
  mapData:{[key:number]:boolean};
  constructor(private master:MasterService){
    this.data=this.master.getData()
    this.mapData=this.master.getMapData()
  }
}
