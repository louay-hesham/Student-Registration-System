import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private api: ApiService, private common: CommonService) { }

  ngOnInit() {
    this.api.getDepartments().subscribe(
      response => {
       if (response['status'] == 'success') {
          this.common.parseDepartments(response['data'])
        } else {
          this.common.makeErrorMessage('Could not fetch departments data', response['error_message'])
        }   
      }
    )
  }

  private getDepartmentCodes(): any {
    return Object.keys(this.common.departments);
  }

  private chooseDepartment(code: string) {
    console.log(code + ' is chosen');
    console.log(this.common.departments[code]);
  }

}
