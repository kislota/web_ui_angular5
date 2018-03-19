import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import {getResponseURL} from '@angular/http/src/http_utils';
import { of } from 'rxjs/observable/of';
import {User} from '../user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class AuthenticationServiceService {

    public token: string;

    private APIuri = 'http://localhost:8000/api/';

    constructor(private http: HttpClient) {}

    // login(username: string, password: string): Observable<boolean> {
    //     return this.http.post<boolean>(this.APIuri + 'login', username, password);

    login(username: string, password: string) {

        let user = {email: username, password: password};

        return this.http.post<string>(this.APIuri + 'login', user)
            .pipe(
                tap(heroes => console.log(`Ok servise`)),
                catchError(this.handleError('Error', []))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }



            // .pipe(
            //     console.log(HttpResponse);
            // );

        // return this.http.post(this.APIuri + 'login', JSON.stringify({username: username, password: password}))
        //     .pipe(
        //         (response: HttpResponse) => {
        //         // login successful if there's a jwt token in the response
        //         let token = response.json() && response.json().token;
        //         if (token) {
        //             // set token property
        //             this.token = token;
        //
        //             // store username and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
        //
        //             // return true to indicate successful login
        //             return true;
        //         } else {
        //             // return false to indicate failed login
        //             return false;
        //         }
        //     });
    // }

    // logout(): void {
    //     // clear token remove user from local storage to log user out
    //     this.token = null;
    //     localStorage.removeItem('currentUser');
    // }
}
