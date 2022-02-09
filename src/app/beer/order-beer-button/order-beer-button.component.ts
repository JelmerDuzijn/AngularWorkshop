import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-order-beer-button',
  templateUrl: './order-beer-button.component.html',
  styleUrls: ['./order-beer-button.component.css']
})
export class OrderBeerButtonComponent implements OnInit {

  @Input() beerToOrder: string = '';
  @Output() ordered: EventEmitter<string>;

  constructor() {
    this.ordered = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  order(): void {
    this.ordered.emit(this.beerToOrder);
  }
}
