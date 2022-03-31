import { TestBed } from '@angular/core/testing';

import { AntennasService } from './antennas.service';

describe('AntennasService', () => {
  let service: AntennasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntennasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
