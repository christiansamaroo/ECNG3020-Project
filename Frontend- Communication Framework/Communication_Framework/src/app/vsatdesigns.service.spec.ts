import { TestBed } from '@angular/core/testing';

import { VsatdesignsService } from './vsatdesigns.service';

describe('VsatdesignsService', () => {
  let service: VsatdesignsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VsatdesignsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
