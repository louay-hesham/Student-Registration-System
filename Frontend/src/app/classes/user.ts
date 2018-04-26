export class User {

  public username: string;
  public password: string;
  public email: string;

  constructor () { }
  
  public toJSON(): any {
    return {
      'username': this.username,
      'password': this.password,
      'email': this.email
    }
  }
}
