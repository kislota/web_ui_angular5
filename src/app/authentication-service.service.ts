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
    public token: string;

    private APIuri = 'http://localhost:8000/api/';

    constructor(private http: HttpClient, private location: Location) {
    }

    login(email: string, password: string) {
        let user = {email: email, password: password};
        return this.http.post<string>(this.APIuri + 'login', user);
    }

    getUsers(){
        return this.http.get(this.APIuri + 'users');
    }

    getUser(token: string): Observable<User> {
        const AuthOptions = {headers: new HttpHeaders({Authorization: token})};
        return this.http.post<User>(this.APIuri + 'authlogin', '', AuthOptions);
    }

    logout(): void {
        this.http.get(this.APIuri + 'logout?Authorization=' + this.token);
    }

    // getToken(): string {
    //     return window.localStorage.getItem('token');
    // }

    addUser(name, email, password) {
        let regUser = {name: name, email: email, password: password};
        return this.http.post<string>(this.APIuri + 'register', regUser);
    }

    updateUser(user) {
        return this.http.put<string>(this.APIuri + 'update', user);
    }
}
