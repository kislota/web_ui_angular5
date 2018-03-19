import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import {User} from '../../user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User = {
        username: 'test',
        email: 'test@mail.net',
        password: 'password',
    };

    result: boolean;

    constructor(private authservise: AuthenticationServiceService) {
    }

    ngOnInit() {
    }

    login() {
        this.authservise.login(this.user.username, this.user.password)
            .subscribe(
            result => {
                if (result) {
                    console.log(result);
                    // login successful
                    console.log(this.user.username, this.user.password);
                    console.log('ok');
                } else {
                    console.log(result);
                    // login failed
                    console.log(this.user.username, this.user.password);
                    console.log('Username or password is incorrect');
                }
            });
    }

}
