import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { LoadingModule } from 'ngx-loading';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user.detail/user.detail.component';
import {AuthenticationServiceService} from './authentication-service.service';
import {RegisterComponent} from "./register/register.component";
import {ForgotComponent} from "./forgot/forgot.component";
import {RespasswordComponent} from "./respassword/respassword.component";
import {ForgotPassComponent} from "./forgot.pass/forgot.pass.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        UsersComponent,
        UserDetailComponent,
        RegisterComponent,
        ForgotComponent,
        ForgotPassComponent,
        RespasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        LoadingModule
    ],
    providers: [
        AuthenticationServiceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
