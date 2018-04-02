import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from "../authentication-service.service";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

    public loading = false;

    constructor(private router: Router, private authservise: AuthenticationServiceService) {
    }

    ngOnInit() {
        this.logout();
    }

    logout(): void {
        this.loading = true;
        let token = window.localStorage.getItem('token');
        if (token) {
            this.authservise.logout(token)
                .subscribe(data => {
                    this.loading = false;
                        if (data == 'logout')
                            window.localStorage.clear();
                        this.router.navigate(['']);
                    }
                );
        } else {
            this.loading = false;
            this.router.navigate(['']);
        }
    }
}
