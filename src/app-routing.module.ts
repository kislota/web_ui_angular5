import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './app/login/login.component';
import {UsersComponent} from './app/users/users.component';
import {LogoutComponent} from './app/logout/logout.component';
import {RegisterComponent} from "./app/register/register.component";
import {UserDetailComponent} from "./app/user.detail/user.detail.component";
import {ForgotComponent} from "./app/forgot/forgot.component";
import {RespasswordComponent} from "./app/respassword/respassword.component";
import {ForgotPassComponent} from "./app/forgot.pass/forgot.pass.component";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'reg', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserDetailComponent},
    {path: 'users', component: UsersComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'forgot', component: ForgotComponent},
    {path: 'forgot/:token', component: ForgotPassComponent},
    {path: 'respassword', component: RespasswordComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}