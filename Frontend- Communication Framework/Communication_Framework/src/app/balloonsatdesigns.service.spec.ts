import { TestBed } from '@angular/core/testing';

import { BalloonsatdesignsService } from './balloonsatdesigns.service';

describe('BalloonsatdesignsService', () => {
  let service: BalloonsatdesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalloonsatdesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
