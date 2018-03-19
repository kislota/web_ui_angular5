import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import {User} from "../../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  private token: string;

  constructor(private authservise: AuthenticationServiceService) { }

  ngOnInit() {
      this.token = this.authservise.getToken();
      this.getUser();
  }

    getUser():void {
    this.authservise.authlogin(this.token)
        .subscribe(user => this.user = user);
    console.log(this.user);
    }
}
