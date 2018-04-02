import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user";
import {Router} from '@angular/router';
import {AuthenticationServiceService} from "../authentication-service.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    public users;
    public loading = false;

    constructor(private router: Router, private authservise: AuthenticationServiceService) {
    }

    ngOnInit() {
        this.users = JSON.parse(window.localStorage.getItem('users'));
        if (this.users) {
            return;
        }
        this.getUsers();
    }

    getUsers(): void {
        this.loading = true;
        let token = window.localStorage.getItem('token');
        if (token) {
            this.authservise.getUsers(token)
                .subscribe(data => {
                    this.loading = false;
                    this.users = data;
                    let users = JSON.stringify(data);
                    window.localStorage.setItem('users', users);
                });
        } else {
            this.loading = false;
            this.router.navigate(['']);
        }
    }
}
