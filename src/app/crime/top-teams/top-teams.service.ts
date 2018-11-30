import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { ITopTeamsInterface } from './top-teams.interface';

@Injectable()
export class topTeamsService{

    teamsUrl: string = 'NflArrest.com/api/v1/crime/topTeams/CrimeID'; /* + CrimeID */
    
    constructor(private _http : HttpClient) {}

    getTopTeams() : Observable<HttpResponse<ITopTeamsInterface>> {
    return this._http.get<ITopTeamsInterface>(
       this.teamsUrl, { observe: 'response' });
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