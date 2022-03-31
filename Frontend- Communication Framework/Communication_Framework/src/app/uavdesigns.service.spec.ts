import { TestBed } from '@angular/core/testing';

import { UavdesignsService } from './uavdesigns.service';

describe('UavdesignsService', () => {
  let service: UavdesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UavdesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
