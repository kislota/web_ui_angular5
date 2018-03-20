import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../authentication-service.service";
import {Router} from "@angular/router";
import {User} from "../../user";

@Component({
    selector: 'app-user.detail',
    templateUrl: './user.detail.component.html',
    styleUrls: ['./user.detail.component.css']
})
export class UserDetailComponent implements OnInit {

    // @Input() user: User;

    public user = {};
    private token: string;

    constructor(private router: Router,
                private authservise: AuthenticationServiceService) {
    }

    ngOnInit() {
        this.token = window.localStorage.getItem('token');
        if (!this.token) {
            this.router.navigate(['']);
            return;
        }
        this.getUser();
    }

    getUser(): void {
        this.user = JSON.parse(window.localStorage.getItem('user'));
        console.log(this.user);

    }
}
