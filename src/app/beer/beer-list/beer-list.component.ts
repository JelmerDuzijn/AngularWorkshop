import { Component, OnInit } from '@angular/core';
import {Beer} from "../beer.model";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  _filter: string = '';

  displayedColumns: Array<string> = ['id', 'photoUrl', 'brand', 'name', 'alcoholPercentage', 'order'];

  beers: Array<Beer> = [
    {
      id: "1",
      photoUrl: "assets/grolsch.png",
      name: "Pilsener",
      brand: "Grolsch",
      description: "A traditional Pilsner style beer with a big hoppy flavour and bite owing to dry hopping late in the brewing process. The zesty and fragrant hops make for a refreshingly dry finish and a slight sweet and sharp zing to the palate, which are best enjoyed with rich, creamy foods like pork sausage and mustard mash, quality fish and chips or cheese like Old Amsterdam, Edam or Brie. Grolsch is known to use a distinctively shaped bottle for its beer, known as de beugel or 'swingtop'.",
      alcoholPercentage: 0.05
    },
    {
      id: "2",
      photoUrl: "assets/gifkikker_640_640.jpg",
      name: "Gifkikker",
      brand: "Topicus",
      description: "Beer brewed and bottled for ICT company Topicus in Deventer (www.topicus.nl). Available on tap in Grandcafe Dikke van Dale at Deventer. 35 EBU, brewed with Hersbrück hops.",
      alcoholPercentage: 0.07
    },
    {
      id: "3",
      photoUrl: "assets/ijwit.jfif",
      name: "IJwit",
      brand: "Brouwerij 't IJ",
      description: "A full-bodied, Amsterdam wheat beer that is dangerously ‘moreish’. Slightly cloudy, it has a beautiful golden colour and a soft, foamy head. The wheat malt gives the beer a delightful, fresh flavour, and the addition of coriander and lemon during the brewing process produces a rich aroma of banana, citrus and spices. Topped off by a fine, slightly sweet aftertaste, IJwit is a delicious thirst-quencher.",
      alcoholPercentage: 0.06
    }
  ]

  filteredBeers: Array<Beer>;

  constructor() { }

  ngOnInit(): void {
    this.filteredBeers = this.beers;
  }

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredBeers = this.beers.filter((beer) => this.beerMatchesFilter(beer));
  }

  handleOrder(event: string): void {
    console.info(event);
  }

  private beerMatchesFilter(beer: Beer): boolean {
    return beer.brand.concat(beer.name).toLocaleLowerCase().indexOf(this._filter) !== -1;
  }
}
