import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Beer} from "../beer.model";
import {BeerDataStateService} from "../beer-data-state.service";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  _filter: string = '';

  displayedColumns: Array<string> = ['id', 'photoUrl', 'brand', 'name', 'alcoholPercentage', 'order'];

  beers$: Observable<Array<Beer>>;
  filteredBeers$: Observable<Array<Beer>>;

  constructor(private readonly _beerDataService: BeerDataStateService) { }

  ngOnInit(): void {
    this._beerDataService.loadBeers();

    this.beers$ = this._beerDataService.beers$;
    this.filteredBeers$ = this.beers$;
  }

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredBeers$ = this.beers$
      .pipe(
        map(beers => beers.filter((beer) => this.beerMatchesFilter(beer)))
      );
  }

  handleOrder(event: string): void {
    console.info(event);
  }

  private beerMatchesFilter(beer: Beer): boolean {
    return beer.brand.concat(beer.name).toLocaleLowerCase().indexOf(this._filter) !== -1;
  }
}
