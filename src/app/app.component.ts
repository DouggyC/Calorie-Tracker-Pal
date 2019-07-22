import { Component } from '@angular/core';
import { MockDataService } from './services/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _mockDataService: MockDataService) {
    // this._mockDataService.intake_list$.subscribe();
  }
}
