import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private authservise: AuthenticationServiceService,
                private location: Location) {
    }

    private token: string;

    ngOnInit() {
        this.logout();
    }

    logout(): void {
        this.authservise.logout(this.authservise.getToken());
        var d = new Date();
        d.setTime(d.getTime() + (0 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "token=;" + expires + ";path=/";
        this.location.go('login');
    }
}
