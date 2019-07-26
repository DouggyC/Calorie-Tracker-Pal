/*API* https://developer.nutritionix.com/docs/v2 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//
import { Observable, of, from } from 'rxjs';
import {
  tap,
  map,
  mapTo,
  groupBy,
  toArray,
  pluck,
  partition,
  filter,
  mergeMap
} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'x-app-id': '0c3c503f',
    'x-app-key': '9b1389ae13c30ed013b27fe139bf0ad1',
    'Content-Type': 'application/json'
  })
};

const BASE_URL = 'https://trackapi.nutritionix.com/v2/';
const SEARCH_INSTANT = 'search/instant';

@Injectable({
  providedIn: 'root'
})
export class SearchFoodService {
  constructor(private http: HttpClient) {}

  searchFood(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<any>(
        `${BASE_URL + SEARCH_INSTANT}?query=${encodeURIComponent(
          term
        )}&common=true&branded=true`,
        httpOptions
      )
      .pipe(
        tap(a => console.log(a)),
        map(a => [a]),
        tap(a => console.log(a))
      );
  }
}
