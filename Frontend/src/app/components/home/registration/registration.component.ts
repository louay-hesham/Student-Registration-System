import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../../../classes/user'
import { CommonService } from '../../../services/common.service';
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

  constructor(private api: ApiService, private common: CommonService) { }

  ngOnInit() { }

  private register() {
    if (this.user.username == undefined || this.user.username == '' ||
        this.user.email == undefined || this.user.email == '' ||
        this.user.password == undefined || this.user.password == '' ||
        this.repeatedPassword == undefined || this.repeatedPassword == '') {
      this.common.makeErrorMessage('Can not register', 'Fill the empty fields');
    } else if (!this.validateEmail()) {
      this.common.makeErrorMessage('Can not register', 'Please enter a valid email');
    } else if (!this.checkPassword()) {
      this.common.makeErrorMessage('Can not register', 'Passwords do not match');
    } else {
      this.api.registerUser(this.user.toJSON()).subscribe (
        response => {
          if (response['status'] == 'success') {
            this.common.makeSuccessMessage('Registration successful');
            this.common.parseUser(response['data'])
          } else {
            this.common.makeErrorMessage('Can not register', response['error_message']);
          }          
        },
        error => {
          console.log(error);
        }
      )
    }
  }

  private validateEmail(): boolean {
    return this.emailRegex.test(this.user.email) || this.user.email == undefined;
  }

  private emailClass(): string {
    let classes = 'form-control';
    if (this.validateEmail()) {
      return classes + ' ng-valid';
    } else {
      return classes + ' ng-invalid';
    }
  }

  private checkPassword(): boolean {
    return this.user.password == this.repeatedPassword;
  }

  private repPwdClass(): string {
    let classes = 'form-control';
    if (this.checkPassword()) {
      return classes + ' ng-valid';
    } else {
      return classes + ' ng-invalid';
    }
  }

}
