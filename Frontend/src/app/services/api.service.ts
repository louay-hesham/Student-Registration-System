import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../classes/user'
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:8000/'

  public registerUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl + 'register/', user)
  }

  public login(username: string, password: string): Observable<any> {
    let data = {
      'username': username,
      'password': password
    }
    return this.http.post(this.baseUrl + 'login/', data)  
  }

  public getDepartments(): Observable<any> {
    return this.http.post(this.baseUrl + 'getdepartments/', {});
  }

  public chooseDepartment(depID: string, userID: number): Observable<any> {
    let data = {
      'user_id': userID,
      'dep_id': depID
    }
    return this.http.post(this.baseUrl + 'choosedepartment/', data);
  }

  public getCourses(depID: string): Observable<any> {
    let data = {
      'dep_id': depID 
    }
    return this.http.post(this.baseUrl + 'getcourses/', data);
  }
}
