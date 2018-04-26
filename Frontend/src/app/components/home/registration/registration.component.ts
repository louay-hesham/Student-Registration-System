import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../../../classes/user'
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user: User = new User();
  private repeatedPassword: string;
  private emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private api: ApiService) { }

  ngOnInit() { }

  private register() {
    console.log(this.user.toJSON())
  }

  private validateEmail(): boolean {
    return this.emailRegex.test(this.user.email) || this.user.email == undefined;
  }

  private checkPassword(): boolean {
    return this.user.password == this.repeatedPassword;
  }

}
