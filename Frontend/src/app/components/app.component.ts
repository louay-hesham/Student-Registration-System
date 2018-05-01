import { Component } from '@angular/core';
import { CommonService } from '../services/common.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private common: CommonService) { }

  private loggedIn(): boolean {
    return this.common.user != undefined;
  }

  private showDepartments(): boolean {
    return this.common.user.department == null || this.common.user.department == undefined;
  }

  private logout() {
    
  }
}
