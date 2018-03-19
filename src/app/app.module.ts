import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import {AuthenticationServiceService} from './authentication-service.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [
      AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
