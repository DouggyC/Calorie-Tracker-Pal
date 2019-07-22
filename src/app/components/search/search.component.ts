import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchFoodService } from 'src/app/services/search-food.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  foods$: Observable<any>;
  common$$: Observable<[]>;
  private searchTerms = new Subject<string>();

  constructor(private searchFoodService: SearchFoodService) {}

  searchFood(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.foods$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchFoodService.searchFood(term))
    );
  }
}
