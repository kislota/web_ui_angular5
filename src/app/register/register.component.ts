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
        this.authservise.addUser(this.name, this.email, this.password).subscribe((result: any) => {
                let token = result.token;
                console.log(token);
                this.authservise.login(this.email, this.password)
                    .subscribe(
                        (result: any) => {
                            let token = 'Bearer ' + result.token;
                            window.localStorage.setItem('token', token);
                            this.router.navigate(['user']);
                        })
            },
            error1 => {
                this.error = error1.error
                console.log(this.error);
            });
    }

}