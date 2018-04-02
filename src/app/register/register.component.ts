import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user";
import {AuthenticationServiceService} from '../authentication-service.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public user: User;
    public error: object;

    public name: string;
    public email: string;
    public password: string;

    public errorName: string;
    public errorEmail: string;
    public errorPassword: string;
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

    addUser() {
        this.loading = true;
        this.authservise.addUser(this.name, this.email, this.password).subscribe((result: any) => {
                if (result.access_token) {
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
                                    });
                            }, error1 => {
                                this.loading = false;
                                this.error = error1.error;
                            })
                } else {
                    this.loading = false;
                    this.errorName = result.name;
                    this.errorEmail = result.email;
                    this.errorPassword = result.password;
                }
            },
            error1 => {
                this.loading = false;
                this.error = error1.error
            });
    }

}