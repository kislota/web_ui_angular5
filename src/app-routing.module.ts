import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './app/login/login.component';
import {UserComponent} from './app/user/user.component';
import {UserDetailComponent} from './app/user.detail/user.detail.component';
import {LogoutComponent} from './app/logout/logout.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent},
    {path: 'user/:id', component: UserDetailComponent},
    {path: 'logout', component: LogoutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}