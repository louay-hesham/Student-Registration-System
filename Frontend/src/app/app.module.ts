import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './components/app.component';
  import { HomeComponent } from './components/home/home.component';
    import { RegistrationComponent } from './components/home/registration/registration.component';

import { ApiService } from './services/api.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
