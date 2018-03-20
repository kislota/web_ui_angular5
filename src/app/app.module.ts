import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';

import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user.detail/user.detail.component';
import {AuthenticationServiceService} from './authentication-service.service';
import {RegisterComponent} from "./register/register.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LogoutComponent,
        UsersComponent,
        UserDetailComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        AuthenticationServiceService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
