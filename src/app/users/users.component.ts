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

    users: User [];

    constructor(private authservise: AuthenticationServiceService) {
    }

    ngOnInit() {
        this.users = JSON.parse(window.localStorage.getItem('users'));
        if (this.users) {
            return;
        }
        this.getUsers();
    }

    getUsers(): void {
        this.authservise.getUsers()
            .subscribe(data => {
                this.users = data.users;
                let users = JSON.stringify(this.users);
                window.localStorage.setItem('users', users);
            });
    }
}
