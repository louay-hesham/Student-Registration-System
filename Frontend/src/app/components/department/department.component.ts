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
    this.api.chooseDepartment(code, this.common.user.id).subscribe(
      response => {
        if (response['status'] == 'success') {
          this.common.makeSuccessMessage('Department chosen successfully');
          this.common.parseUser(response['data']);
        } else {
          this.common.makeErrorMessage('Could not register in department', response['error_message'])
        } 
      }
    )
  }

}
