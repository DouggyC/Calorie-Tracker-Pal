import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import {
  pluck,
  map,
  tap,
  filter,
  reduce,
  mergeMap,
  defaultIfEmpty
} from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  daily_goal: any = this.mockDataService.daily_goal$;

  consumed_cal: any = this.mockDataService.intake_list$.pipe(
    mergeMap((arr: number[]) =>
      from(arr).pipe(
        defaultIfEmpty(0),
        pluck('nf_calories'),
        reduce((acc: number, cal: number) => acc + cal),
        map(cal => Math.round(cal))
      )
    )
  );

  breakfast_cal = this.mockDataService.intake_list$.pipe(
    mergeMap((arr: []) =>
      from(arr).pipe(
        defaultIfEmpty(0),
        filter((m: any) => m.meal_type === 'breakfast'),
        pluck('nf_calories'),
        reduce((acc: number, cal: number) => acc + cal),
        map(cal => Math.round(cal))
      )
    )
  );
  lunch_cal = this.mockDataService.intake_list$.pipe(
    mergeMap((arr: []) =>
      from(arr).pipe(
        defaultIfEmpty(0),
        filter((m: any) => m.meal_type === 'lunch'),
        pluck('nf_calories'),
        reduce((acc: number, cal: number) => acc + cal),
        map(cal => Math.round(cal))
      )
    )
  );
  dinner_cal = this.mockDataService.intake_list$.pipe(
    mergeMap((arr: []) =>
      from(arr).pipe(
        defaultIfEmpty(0),
        filter((m: any) => m.meal_type === 'dinner'),
        pluck('nf_calories'),
        reduce((acc: number, cal: number) => acc + cal),
        map(cal => Math.round(cal))
      )
    )
  );
  snack_cal = this.mockDataService.intake_list$.pipe(
    mergeMap((arr: []) =>
      from(arr).pipe(
        defaultIfEmpty(0),
        filter((m: any) => m.meal_type === 'snack'),
        pluck('nf_calories'),
        reduce((acc: number, cal: number) => acc + cal),
        map(cal => Math.round(cal))
      )
    )
  );

  // Progress Bar
  percentage = (this.daily_goal / this.consumed_cal) * 100;

  // Unused alternate solution using ES6
  // consumed_cal2$ = this.mockDataService.consumed_cal2$.pipe(
  //   map(arr => arr.reduce((t, c) => Math.round(t + c)))
  //   map(a => Math.round(a))
  // );

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {}
}
