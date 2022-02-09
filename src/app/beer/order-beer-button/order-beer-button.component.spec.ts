import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBeerButtonComponent } from './order-beer-button.component';

describe('OrderBeerButtonComponent', () => {
  let component: OrderBeerButtonComponent;
  let fixture: ComponentFixture<OrderBeerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderBeerButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBeerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
