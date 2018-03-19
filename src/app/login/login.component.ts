import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import {User} from '../../user';
import {Location} from "@angular/common";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    @Input() user: User;
    // user: = {
    //     name: 'admin',
    //     email: 'admin@gmail.com',
    //     password: 'secret'
    // };

    private token: string;
    public email: string;
    public password: string;

    constructor(
                private authservise: AuthenticationServiceService,
                private location: Location) {
    }

    ngOnInit() {
        this.token = this.authservise.getToken();
        if(this.token){
            console.log('Token found');
            this.location.go('user');
        }
    }

    login() {
        this.authservise.login(this.email, this.password)
            .subscribe(
                (result: any) => {
                    let token = 'Bearer ' + result.token;
                    this.authservise.authlogin(token).subscribe(
                        data => {
                            document.cookie = "token =" + token;
                            this.toUser();
                        },
                        error2 => {
                            console.log(error2.error);
                        }
                    );
                    },
                error1 => {
                    console.log(error1.error);
                });
    }

    toUser() {
        this.location.go('/user');
    }
}
