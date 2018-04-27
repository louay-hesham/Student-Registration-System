import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './components/app.component';
  import { HomeComponent } from './components/home/home.component';
    import { RegistrationComponent } from './components/home/registration/registration.component';
    import { LoginComponent } from './components/home/login/login.component';

import { ApiService } from './services/api.service';
import { CommonService } from './services/common.service';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
