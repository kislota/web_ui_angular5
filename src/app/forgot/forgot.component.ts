import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../authentication-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.component.html',
    styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
    public email: string;
    public error: string;
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

    forgotMail() {
        this.loading = true;
        this.authservise.forgotMail(this.email)
            .subscribe(
                (result: any) => {
                    this.loading = false;
                    if(result.token){
                        this.router.navigate(['login']);
                    }else{
                        this.error = result.message;
                    }
                },
                error2 => {
                    this.loading = false;
                    this.error = error2.error;
                }
            );
    }

}
