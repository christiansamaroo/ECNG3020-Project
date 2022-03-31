import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransceiversComponent } from './transceivers.component';

describe('TransceiversComponent', () => {
  let component: TransceiversComponent;
  let fixture: ComponentFixture<TransceiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransceiversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransceiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
