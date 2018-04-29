import { Injectable } from '@angular/core';
import { User } from '../classes/user'
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Injectable()
export class CommonService {

  public user: User = undefined;

  constructor() { }

  public makeSuccessMessage(title: string, text:string = '') {
    swal({
      title: title,
      text: text,
      icon: "success",
    });
  }

  public makeErrorMessage(title: string, text: string) {
    swal({
      title: title,
      text: text,
      icon: "error",
    });
  }

  public parseUser(userData: any): User{
    let user = new User();
    userData = JSON.parse(userData);
    user.id = userData[0]['pk'];
    user.username = userData[0]['fields']['username'];
    user.email = userData[0]['fields']['email'];
    user.registrationDate = new Date(userData[0]['fields']['registrationdate']);
    user.password = userData[0]['fields']['password'];
    user.department = userData[0]['fields']['department'];
    return user;
  }  
}
