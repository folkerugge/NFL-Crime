import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ITopCrimesInterface } from './top-crimes.interface';
import { Observable } from 'rxjs';

@Injectable()
export class TopCrimesService {

    topUrl: string = 'http://NflArrest.com/api/v1/crime';

    constructor(private _http : HttpClient) {}

    getTopCrimes() : Observable<HttpResponse<ITopCrimesInterface>> {
        return this._http.get<ITopCrimesInterface>(
           this.topUrl, { observe: 'response' });
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