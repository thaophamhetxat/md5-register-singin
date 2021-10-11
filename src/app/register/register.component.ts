import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  country = '1';
  age = '';
  gender = '';
  phone = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(formRegister: NgForm) {
    console.log(formRegister);
  }

  check_pass() {
    // @ts-ignore
    if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
      // @ts-ignore
      document.getElementById('submit').disabled = false;
    } else {
      // @ts-ignore
      document.getElementById('submit').disabled = true;

    }
  }


}
