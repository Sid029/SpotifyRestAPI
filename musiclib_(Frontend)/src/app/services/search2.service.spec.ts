import { TestBed } from '@angular/core/testing';

import { Search2Service } from './search2.service';

describe('Search2Service', () => {
  let service: Search2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Search2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
