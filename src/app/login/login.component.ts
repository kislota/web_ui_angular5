import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import {User} from '../../user';
import {Router} from '@angular/router';
import {parseJson} from "@angular-devkit/core";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;
    public error: object;
    public loading = false;

    constructor(private authservise: AuthenticationServiceService,
                private router: Router) {
    }

    ngOnInit() {
        let token: string = window.localStorage.getItem('token');
        if (token) {
            this.router.navigate(['user']);
        }
    }

    login() {
        this.loading = true;
        this.authservise.login(this.email, this.password)
            .subscribe(
                (result: any) => {
                    this.loading = false;
                    let token = result.token_type + ' ' + result.access_token;
                    window.localStorage.setItem('token', token);
                    this.authservise.getUser(token)
                        .subscribe(data => {
                                let user = JSON.stringify(data);
                                window.localStorage.setItem('user', user);
                                this.router.navigate(['user']);
                            },
                            error2 => this.error = error2.error);
                },
                error1 => {
                    this.loading = false;
                    this.error = error1.error
                });
    }
}
