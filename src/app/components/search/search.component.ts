import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchFoodService } from 'src/app/services/search-food.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();

  foods$: any = this.searchTerms.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((term: string) => this.searchFoodService.searchFood(term))
  );
  common$$: Observable<[]>;

  constructor(private searchFoodService: SearchFoodService) {}

  searchFood(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {}
}
