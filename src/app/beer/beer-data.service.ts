import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, tap, throwError} from "rxjs";
import {Beer} from "./beer.model";

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private readonly _httpClient: HttpClient) { }

  public getBeers$(): Observable<Array<Beer>> {
    return this._httpClient.get<Array<Beer>>('/assets/mockservice/getbeers.json')
      .pipe(
        catchError(this.handleError),
        tap(data => console.log('Beers loaded: ' + JSON.stringify(data)))
      );
  }

  public getBeerById(id: string): Observable<Beer | undefined> {
    return this.getBeers$()
      .pipe(
        map(beers => beers.find(b => b.id === id))
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => error);
  }
}
