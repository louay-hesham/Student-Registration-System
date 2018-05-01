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

  public hashedLogin(username: string, password: string): Observable<any> {
    let data = {
      'username': username,
      'password': password
    }
    return this.http.post(this.baseUrl + 'hashedlogin/', data)  
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

  public registerCourses(userID: number, courses: any): Observable<any> {
    let coursesCodes = [];
    for(let code of Object.keys(courses)) {
      if (courses[code]) {
        coursesCodes.push(code);
      }
    }
    let data = {
      'user_id': userID,
      'courses': coursesCodes
    }
    return this.http.post(this.baseUrl + 'registercourses/', data);
  }

  public getRegisteredCourses(userID: number): Observable<any> {
    let data = {
      'user_id': userID
    }
    return this.http.post(this.baseUrl + 'getregisteredcourses/', data);
  }
}
