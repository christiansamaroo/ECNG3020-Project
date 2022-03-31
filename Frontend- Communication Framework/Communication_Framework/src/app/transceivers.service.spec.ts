import { TestBed } from '@angular/core/testing';

import { TransceiversService } from './transceivers.service';

describe('TransceiversService', () => {
  let service: TransceiversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransceiversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
