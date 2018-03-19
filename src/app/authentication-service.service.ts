import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {getResponseURL} from '@angular/http/src/http_utils';
import {of} from 'rxjs/observable/of';
import {User} from '../user';



@Injectable()
export class AuthenticationServiceService {

    public token: string;

    private APIuri = 'http://localhost:8000/api/';

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        let user = {email: email, password: password};
        return this.http.post<string>(this.APIuri + 'login', user);
    }

    authlogin(token: string): Observable<User> {
        const AuthOptions = {
            headers: new HttpHeaders({
                Authorization: token,
                'Content-Type':  'application/json',
            })
        };
        return this.http.post<User>(this.APIuri + 'authlogin', '', AuthOptions);
    }


    logout(): void {
        this.http.get<string>(this.APIuri + 'logout?Authorization=' + this.token);
    }

    getToken():string {
        var value = "; " + document.cookie;
        var parts = value.split("; token=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    }



    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
