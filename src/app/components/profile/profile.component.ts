import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // weight: number = diet.weight_kg;
  // height: number = diet.height_cm;
  // firstName: string = diet.first_name;
  // lastName: string = diet.last_name;
  first_name = this.mockDataService.first_name$;
  last_name = this.mockDataService.last_name$;
  height = this.mockDataService.height$;
  weight = this.mockDataService.weight$;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {}
}
