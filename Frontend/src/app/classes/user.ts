import * as crypto from 'crypto-js';

export class User {

  public id: number;
  public username: string;
  public password: string;
  public email: string;
  public registrationDate: Date;
  public department: string;

  constructor () { }
  
  public toJSON(): any {
    let hashedPwd = crypto.MD5(this.password)
    return {
      'id': this.id,
      'username': this.username,
      'password': hashedPwd,
      'email': this.email
    }
  }

  public toJSON_noEcryption(): any {
    return {
      'id': this.id,
      'username': this.username,
      'password': this.password,
      'email': this.email,
      'registrationDate': this.registrationDate,
      'department': this.department
    }
  }
}
