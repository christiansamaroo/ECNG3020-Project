import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamdesignsComponent } from './hamdesigns.component';

describe('HamdesignsComponent', () => {
  let component: HamdesignsComponent;
  let fixture: ComponentFixture<HamdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
