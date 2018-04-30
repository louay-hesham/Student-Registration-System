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

  constructor(private api: ApiService, private common: CommonService) { }

  ngOnInit() {
    this.api.getCourses(this.common.user.department).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.common.parseCourses(response['data']);
          for(let code of this.getCoursesCodes()) {
            this.selectedCourses[code] = false;
          }
        }
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
      return 'Remove Selection';
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
        console.log(response);
      }
    )
  }

  private resetSelection() {

  }

}
