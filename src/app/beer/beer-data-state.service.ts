import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {Beer, BeerState} from "./beer.model";

@Injectable({
  providedIn: 'root'
})
export class BeerDataStateService {

  private readonly beers: BehaviorSubject<Array<BeerState>>;
  private readonly selectedBeer: Subject<BeerState>;

  constructor(private readonly _httpClient: HttpClient) {
    this.beers = new BehaviorSubject<Array<BeerState>>([]);
    this.selectedBeer = new Subject<BeerState>();
  }

  public loadBeers(): void {
    if (this.beers.getValue().length !== 0) {
      return;
    }

    this._httpClient.get<Array<Beer>>('/assets/mockservice/getbeers.json')
      .pipe(
        map((beer) => beer.map(this.mapBeer))
      )
      .subscribe((beers) => {
        this.beers.next(beers);
      });
  }

  public get beers$(): Observable<Array<BeerState>> {
    return this.beers.asObservable();
  }

  public getBeerById(id: string): Observable<BeerState | undefined> {
    return this.beers$
      .pipe(
        map(beers => beers.find(b => b.id === id))
      );
  }

  public like(beerId: string): void {
    // Pretend we're sending an HTTP PUT event to the back-end
    this.updateBeer(beerId, update => update.likes++);
  }

  public dislike(beerId: string): void {
    // Pretend we're sending an HTTP PUT event to the back-end
    this.updateBeer(beerId, update => update.dislikes++);
  }

  private updateBeer(beerId: string, mutation: (update: BeerState) => void): void {
    // Use the spread operator to copy the array into a new const variable
    const state = [...this.beers.value];
    // Use the spread operator to copy the beer into a new const variable
    const beer = {...state.find(b => b.id === beerId)};

    // Run the mutation
    mutation(beer);

    // Find the index of the item we want to update
    const index = state.findIndex(b => b.id == beerId);

    // Splice the array at the index, delete 1 item and insert our updated copy.
    state.splice(index, 1, beer)

    // Insert the updated state.
    this.beers.next(state);
  }

  private mapBeer(beer: Beer): BeerState {
    return {
      ...beer,
      likes: 0,
      dislikes: 0
    }
  }
}

