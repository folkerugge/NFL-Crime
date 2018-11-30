import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITopPlayersInterface } from './top-players.interface';

@Injectable()
export class topPlayersService{

    playersUrl: string = 'NflArrest.com/api/v1/crime/topPlayers/';/* + CrimeID */ 

    constructor(private _http : HttpClient) {}

    getPlayersCrimes() : Observable<HttpResponse<ITopPlayersInterface>> {
        return this._http.get<ITopPlayersInterface>(
           this.playersUrl, { observe: 'response' });
    }


    /**
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
       */
}