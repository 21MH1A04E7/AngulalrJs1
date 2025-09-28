import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-otp-field',
  templateUrl: './otp-field.component.html',
  styleUrls: ['./otp-field.component.css']
})
export class OtpFieldComponent implements OnInit {
  otpArray: FormArray;

  constructor(private fb: FormBuilder) {
    this.otpArray = this.fb.array([]);
  }

  length: number = 6;

  ngOnInit() {
    for (let i = 0; i < this.length; i++) {
      this.otpArray.push(new FormControl(''));
    }
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '').slice(0, 1); 

    input.value = value;
    this.otpArray.at(index).setValue(value);


    if (value && index < this.length - 1) {
      setTimeout(() => {
        (input.nextElementSibling as HTMLInputElement)?.focus();
      }, 10);
    }

    if (index === this.length - 1) {
      this.autoSubmit();
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && input.value === '') {
      if (index > 0) {
        setTimeout(() => {
          (input.previousElementSibling as HTMLInputElement)?.focus();
        }, 10);
      }
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      (input.previousElementSibling as HTMLInputElement)?.focus();
    }

    if (event.key === 'ArrowRight' && index < this.length - 1) {
      (input.nextElementSibling as HTMLInputElement)?.focus();
    }
  }

  autoSubmit() {
    console.log('submitted');
    console.log(this.otpArray.value.join(''));
  }
}
