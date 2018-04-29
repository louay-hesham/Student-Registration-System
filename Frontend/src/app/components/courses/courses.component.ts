import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private api: ApiService, private common: CommonService) { }

  ngOnInit() {
    this.api.getCourses(this.common.user.department).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.common.parseCourses(response['data']);
        }
      }
    )
  }

}
