import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  private selectedCourses: any = { };
  private registerationDates: any = { };

  constructor(private api: ApiService, private common: CommonService) { }

  ngOnInit() {
    this.api.getCourses(this.common.user.department).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.common.parseCourses(response['data']);
          for(let code in this.common.courses) {
            this.selectedCourses[code] = false;
          }
        }
      }
    )
    this.setRegisteredCourses();
  }

  private setRegisteredCourses() {
    this.api.getRegisteredCourses(this.common.user.id).subscribe(
      response => {
        let registeredCourses = this.common.parseRegisteredCourses(response['data']);
        for (let code in registeredCourses){
          this.selectedCourses[code] = true;
        }
        this.registerationDates = registeredCourses;
      }
    )
  }

  private getCoursesCodes(): any {
    return Object.keys(this.common.courses);
  }

  private buttonClass(code: string): string {
    if (this.selectedCourses[code]) {
      return 'btn btn-danger';
    } else {
      return 'btn btn-primary';
    }
  }

  private buttonText(code: string): string {
    if (this.selectedCourses[code]) {
      return 'Remove';
    } else {
      return 'Select';
    } 
  }

  private selectCourse(code: string) {
    this.selectedCourses[code] = !this.selectedCourses[code];
  }

  private saveSelection() {
    this.api.registerCourses(this.common.user.id, this.selectedCourses).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.common.makeSuccessMessage('Courses saved successfully');
          for(let code in this.common.courses) {
            this.selectedCourses[code] = false;
          }
          let registeredCourses = this.common.parseRegisteredCourses(response['data']);
          for (let code in registeredCourses){
            this.selectedCourses[code] = true;
          }
          this.registerationDates = registeredCourses;
        }
      }
    )
  }

  private resetSelection() {
    for(let code in this.common.courses) {
      this.selectedCourses[code] = false;
    }
    this.setRegisteredCourses();
  }

  private getRegisterationDate(code: string): string {
    try {
      return this.registerationDates[code];
    } catch {
      return '';
    }
  }

}
