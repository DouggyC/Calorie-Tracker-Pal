import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/services/mock-data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  intake_list$ = this.mockDataService.intake_list$.pipe(
    tap(a => console.log(a))
  );

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {}
}
