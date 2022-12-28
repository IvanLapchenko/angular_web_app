import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  //myForm: FormGroup = new FormGroup({

  //  "username": new FormControl(),
  //  "password": new FormControl(),

  //});

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({

      "username": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required]),
    });
  }

  submit() {
    console.log(this.myForm);
  }
}
