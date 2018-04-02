import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../authentication-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-respassword',
    templateUrl: './respassword.component.html',
    styleUrls: ['./respassword.component.css']
})
export class RespasswordComponent implements OnInit {
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

}
