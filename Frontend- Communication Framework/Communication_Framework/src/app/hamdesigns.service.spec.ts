import { TestBed } from '@angular/core/testing';

import { HamdesignsService } from './hamdesigns.service';

describe('HamdesignsService', () => {
  let service: HamdesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamdesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
