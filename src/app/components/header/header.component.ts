import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { diet } from '../../services/mockData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  date$;
  shadow_date;

  // todayDate = this.mockDataService.dateObj$.setDate(
  //   this.mockDataService.dateObj$.getDate()
  // );

  // dateData$ = this.mockDataService.data$;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.shadow_date = this.mockDataService.dateObj$;
    this.date$ = this.mockDataService.dateObj$;
    // todayDate is synced with dateObj$, and used to conditionally render 'Today', if data === todayDate
    // console.log(this.todayDate, this.date); // 1562611504569 undefined
  }

  yesterday() {
    (this.date$ = this.mockDataService.yesDate()),
      // this.date = this.mockDataService.yesterday$();
      this.mockDataService.intake_list$.next(
        diet.data_points[(this.mockDataService.ind += 1)].intake_list
      );
  }

  tomorrow() {
    (this.date$ = this.mockDataService.tmrDate()),
      this.mockDataService.intake_list$.next(
        diet.data_points[(this.mockDataService.ind -= 1)].intake_list
      );
  }
}
