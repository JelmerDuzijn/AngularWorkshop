import { Component, OnInit } from '@angular/core';
import {Beer, BeerState} from "../beer.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BeerDataStateService} from "../beer-data-state.service";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beer$: Observable<BeerState>;

  constructor(private readonly _beerDataService: BeerDataStateService,
              private readonly _activatedRoute: ActivatedRoute,
              private readonly _router: Router) { }

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.beer$ = this._beerDataService.getBeerById(id);
    }
  }

  navigateBack(): void {
    this._router.navigate(['/beers'])
  }

  dislike(id: string): void {
    this._beerDataService.dislike(id);
  }

  like(id: string): void {
    this._beerDataService.like(id);
  }
}
