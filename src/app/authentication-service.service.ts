import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {getResponseURL} from '@angular/http/src/http_utils';
import {of} from 'rxjs/observable/of';
import {User} from '../user';
import {Location} from "@angular/common";

@Injectable()
export class AuthenticationServiceService {

    public user: User;
    private APIuri = 'http://localhost:8000/api/';

    constructor(private http: HttpClient, private location: Location) {
    }

    login(email: string, password: string) {
        let user = {email: email, password: password};
        return this.http.post<string>(this.APIuri + 'login', user);
    }

    getUsers(token: string) {
        const UsersOptions = {headers: new HttpHeaders({Authorization: token})};
        return this.http.get(this.APIuri + 'users', UsersOptions);
    }

    getUser(token: string): Observable<User> {
        const AuthOptions = {headers: new HttpHeaders({Authorization: token})};
        return this.http.post<User>(this.APIuri + 'user', '', AuthOptions);
    }

    logout(token: string) {
        const LogoutOptions = {headers: new HttpHeaders({Authorization: token})};
        return this.http.get(this.APIuri + 'logout', LogoutOptions);
    }

    addUser(name, email, password) {
        let regUser = {name: name, email: email, password: password};
        return this.http.post<string>(this.APIuri + 'register', regUser);
    }

    updateUser(token, password) {
        const UpdateOptions = {headers: new HttpHeaders({Authorization: 'bearer '+token, PHP_AUTH_PW: password})};
        return this.http.put<string>(this.APIuri + 'updateUser', '', UpdateOptions);
    }

    forgotMail(email) {
        let mail = {email: email};
        return this.http.post<string>(this.APIuri + 'forgot', mail);
    }
}
