import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonService } from '../../../services/common.service';
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private api: ApiService, private common: CommonService) { }

  ngOnInit() { }

  private login() {
    let hashedPwd = crypto.MD5(this.password);
    this.api.login(this.username, hashedPwd).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.common.makeSuccessMessage('Login successful')
          let x = this.common.parseUser(response['data']).toJSON_noEcryption()
          console.log(x)
        } else {
          this.common.makeErrorMessage('Could not login', response['error_message'])
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
