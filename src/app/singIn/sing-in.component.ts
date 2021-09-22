import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  email = '';
  password = '';


  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(formSingIn: NgForm) {
    console.log(formSingIn);
  }
}
