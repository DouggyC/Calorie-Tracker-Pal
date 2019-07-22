import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  from,
  pipe,
  of,
  fromEvent
} from 'rxjs';
import { diet } from './mockData';
import {
  pluck,
  tap,
  filter,
  map,
  reduce,
  scan,
  switchMap,
  merge
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  ind = 0;

  DataSource$ = new BehaviorSubject<any>(diet);

  // Profile component
  first_name$ = this.DataSource$.pipe(pluck('first_name'));
  last_name$ = this.DataSource$.pipe(pluck('last_name'));
  height$ = this.DataSource$.pipe(pluck('height_cm'));
  weight$ = this.DataSource$.pipe(pluck('weight_kg'));

  // Macros and List component
  daily_goal$ = this.DataSource$.pipe(pluck('daily_goal'));
  // Using rxjs operators
  intake_list$ = new BehaviorSubject<any[]>(diet.data_points[0].intake_list);
  // alternate; using ES6
  // intake_list2$ = new BehaviorSubject<number>(
  //   diet.data_points[1].intake_list.reduce((a, cal) => a + cal.nf_calories, 0)
  // );

  date$ = new BehaviorSubject<any>(new Date());

  public dateObj$: any = new Date();

  constructor() {}

  // Date controls
  yesDate(): void {
    return this.dateObj$.setDate(this.dateObj$.getDate() - 1);
  }
  tmrDate(): void {
    return this.dateObj$.setDate(this.dateObj$.getDate() + 1);
  }
}
