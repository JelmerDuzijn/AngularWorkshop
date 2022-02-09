import { TestBed } from '@angular/core/testing';

import { BeerDataStateService } from './beer-data-state.service';

describe('BeerDataStateService', () => {
  let service: BeerDataStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerDataStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
