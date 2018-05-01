import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './components/app.component';
  import { HomeComponent } from './components/home/home.component';
    import { RegistrationComponent } from './components/home/registration/registration.component';
    import { LoginComponent } from './components/home/login/login.component';

import { ApiService } from './services/api.service';
import { CommonService } from './services/common.service';
import { DepartmentComponent } from './components/department/department.component';
import { CoursesComponent } from './components/courses/courses.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    DepartmentComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    CommonService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
