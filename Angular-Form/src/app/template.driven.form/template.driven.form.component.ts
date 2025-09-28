import { Component } from '@angular/core';
import {NgForm,FormControl}  from '@angular/forms';
@Component({
  selector: 'app-template.driven.form',
  templateUrl: './template.driven.form.component.html',
  styleUrl: './template.driven.form.component.css'
})
export class TemplateDrivenFormComponent {
  onSubmit(f:NgForm){
    // console.log(f)
    console.log(f.value)
  }
  getValue(f:any){
    console.log(f)
  }
}
