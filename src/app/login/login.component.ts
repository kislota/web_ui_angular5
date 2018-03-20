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
        this.authservise.login(this.email, this.password)
            .subscribe(
                (result: any) => {
                    let token = 'Bearer ' + result.token;
                    window.localStorage.setItem('token', token);
                    this.authservise.getUser(token)
                        .subscribe(data => {
                            let user = JSON.stringify(data.user);
                            window.localStorage.setItem('user', user);
                            this.router.navigate(['user']);
                        });
                },
                error1 => {
                    this.error = error1.error
                    console.log(this.error);
                });
    }
}
