import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form:FormGroup;
  emailRegex:string = "[/^[^\s@]+@[^\s@]+\.[^\s@]+$/]";
  constructor() {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),
      address: new FormControl(),
    });
  }
  get fullname(){
    return this.form.get('fullName');
  }
  get Email(){
    return this.form.get('email');
  }
  get Address(){
    return this.form.get('address');
  }
}
