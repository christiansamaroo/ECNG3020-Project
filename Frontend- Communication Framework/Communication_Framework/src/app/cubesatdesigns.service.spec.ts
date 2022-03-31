import { TestBed } from '@angular/core/testing';

import { CubesatdesignsService } from './cubesatdesigns.service';

describe('CubesatdesignsService', () => {
  let service: CubesatdesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubesatdesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
