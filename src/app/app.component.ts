import { Component } from '@angular/core';
import { MockDataService } from './services/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  course = [
    {
      cardIndex: 1,
      description: 'Angular'
    },
    {
      cardIndex: 2,
      description: 'React'
    }
  ];

  constructor(private _mockDataService: MockDataService) {
    // this._mockDataService.intake_list$.subscribe();
  }
}
