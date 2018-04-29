import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getDepartments().subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
