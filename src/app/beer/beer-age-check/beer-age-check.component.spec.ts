import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerAgeCheckComponent } from './beer-age-check.component';

describe('BeerAgeCheckComponent', () => {
  let component: BeerAgeCheckComponent;
  let fixture: ComponentFixture<BeerAgeCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerAgeCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerAgeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
