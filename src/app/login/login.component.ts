import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  users: User[] = [];

  myForm: FormGroup;

  isAuth: boolean = document.cookie.includes("admin") || document.cookie.includes("user");

  ngOnInit() {
    this.loginService.getUsers().subscribe(result => {
      this.users = result;
    });
  }

  constructor(private loginService: LoginService) {
    this.myForm = new FormGroup({

      "username": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required),
    });
  }

  submit() {
    this.isAuth = this.loginService.logIn(this.users, this.myForm);
  }

  logout() {
    document.cookie = "a"
    console.log(document.cookie)
    this.isAuth = false;
  }
}
