import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../../../classes/user'
import { EmailValidator } from '@angular/forms';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

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
    if (this.user.username == undefined || this.user.username == '' ||
        this.user.email == undefined || this.user.email == '' ||
        this.user.password == undefined || this.user.password == '' ||
        this.repeatedPassword == undefined || this.repeatedPassword == '') {
      swal({
        title: "Can not register",
        text: "Fill the empty fields",
        icon: "error",
      });
    } else if (!this.validateEmail()) {
      swal({
        title: "Can not register",
        text: "Please enter a valid email",
        icon: "error",
      });
    } else if (!this.checkPassword()) {
      swal({
        title: "Can not register",
        text: "Passwords do not match",
        icon: "error",
      });
    } else {
      this.api.registerUser(this.user.toJSON()).subscribe (
        response => {
          if (response['status'] == 'success') {
            swal({
              title: "Registration successful",
              icon: "success",
            });
          } else {
            swal({
              title: "Can not register",
              text: response['error_message'],
              icon: "error",
            });    
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
