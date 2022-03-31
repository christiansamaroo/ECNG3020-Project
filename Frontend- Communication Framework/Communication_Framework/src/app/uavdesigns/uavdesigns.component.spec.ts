import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UavdesignsComponent } from './uavdesigns.component';

describe('UavdesignsComponent', () => {
  let component: UavdesignsComponent;
  let fixture: ComponentFixture<UavdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UavdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UavdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
