import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'localhost:8000/'
}
