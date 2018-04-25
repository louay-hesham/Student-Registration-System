import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  result: any = 'not called yet';

  constructor(private http: HttpClient) { }
  
  click() {
    console.log('of a7')
    const baseUrl = 'http://localhost:8000/';
    const queryString = 'test/';
    let uri = baseUrl + queryString;
    let n = {'n': 5};
    this.http.post(uri, n).subscribe(
      data => {
        this.result = data;
        console.log(this.result)
      }
    )
  }
}
