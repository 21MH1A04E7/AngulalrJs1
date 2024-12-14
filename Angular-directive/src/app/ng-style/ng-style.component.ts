import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  isActive:boolean=true
  constructor(){}
  onClick():void{
    this.isActive=!this.isActive;
  }
}
