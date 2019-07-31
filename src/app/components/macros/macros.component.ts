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
import { from, animationFrameScheduler, Observable } from 'rxjs';

@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit, AfterViewInit {
  daily_goal: any = this.mockDataService.daily_goal$;

  consumed_cal: Observable<number> = this.mockDataService.intake_list$.pipe(
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

  percentage = Number(this.consumed_cal) / this.daily_goal;

  // Progress Bar

  // Unused alternate solution using ES6
  // consumed_cal2$ = this.mockDataService.consumed_cal2$.pipe(
  //   map(arr => arr.reduce((t, c) => Math.round(t + c)))
  //   map(a => Math.round(a))
  // );

  div = document.querySelector('.height');

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log(typeof this.percentage);
    // console.log(this.percentage);
    // console.log(this.consumed_cal);
    // console.log(typeof this.daily_goal);
    // animationFrameScheduler.schedule(
    //   height => {
    //     this.div.style.height = height + 'px';
    //     this.schedule(height + 1);
    //   },
    //   0,
    //   0
    // );
  }
}
