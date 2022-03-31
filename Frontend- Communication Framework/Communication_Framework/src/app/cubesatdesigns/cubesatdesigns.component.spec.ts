import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubesatdesignsComponent } from './cubesatdesigns.component';

describe('CubesatdesignsComponent', () => {
  let component: CubesatdesignsComponent;
  let fixture: ComponentFixture<CubesatdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubesatdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubesatdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
