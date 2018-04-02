import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from "../authentication-service.service";
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-forgot-pass',
    templateUrl: './forgot.pass.component.html',
    styleUrls: ['./forgot.pass.component.css']
})
export class ForgotPassComponent implements OnInit {
    public token: string;
    public passwordfirst: string;
    public passwordsecond: string;
    public error: string;
    public loading = false;

    constructor(private authservise: AuthenticationServiceService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.forgotPass();
    }

    forgotPass() {
        this.token = this.route.snapshot.paramMap.get('token');
    }

    updateUser() {
        this.loading = true;
        if (this.passwordfirst === this.passwordsecond) {
            let password = this.passwordfirst;
            this.authservise.updateUser(this.token, password)
                .subscribe(
                    (result: any) => {
                        this.loading = false;
                        // this.alertify.success('Your password has been changed successfully');
                        this.router.navigate(['login']);
                    },
                    error1 => {
                        this.loading = false;
                        this.error = error1.error;
                    });
        } else {
            this.loading = false;
            this.error = 'Error password';
        }
    }
}
