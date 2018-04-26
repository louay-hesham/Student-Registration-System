import * as crypto from 'crypto-js';

export class User {

  public username: string;
  public password: string;
  public email: string;

  constructor () { }
  
  public toJSON(): any {
    let hashedPwd = crypto.MD5(this.password)
    return {
      'username': this.username,
      'password': hashedPwd,
      'email': this.email
    }
  }
}
