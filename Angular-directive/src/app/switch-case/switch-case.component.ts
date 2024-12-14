import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.css'
})
export class SwitchCaseComponent {
  stepForm:string='Something else'; //
  onClickForm(step:string):void{
    this.stepForm=step;
    // console.log('Clicked on step:',this.stepForm);
  }

  constructor(){}
}
