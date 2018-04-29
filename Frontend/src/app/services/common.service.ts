import { Injectable } from '@angular/core';
import { User } from '../classes/user'
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Injectable()
export class CommonService {

  public user: User = undefined;
  public departments: any;
  public courses: any;

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

  public parseUser(userData: string){
    let user = new User();
    userData = JSON.parse(userData);
    user.id = userData[0]['pk'];
    user.username = userData[0]['fields']['username'];
    user.email = userData[0]['fields']['email'];
    user.registrationDate = new Date(userData[0]['fields']['registrationdate']);
    user.password = userData[0]['fields']['password'];
    user.department = userData[0]['fields']['department'];
    this.user = user;
  }  

  public parseDepartments(departmentsData: string) {
    this.departments = {};
    departmentsData = JSON.parse(departmentsData);
    for (let department of departmentsData) {
      this.departments[department['pk']] = department['fields'];
    }
  }

  public parseCourses(coursesData: string) {
    this.courses = {};
    coursesData = JSON.parse(coursesData);
    for (let course of coursesData) {
      this.courses[course['pk']] = course['fields'];
    }
    console.log(this.courses); 
  }
}
