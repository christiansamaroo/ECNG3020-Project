import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonsatdesignsComponent } from './balloonsatdesigns.component';

describe('BalloonsatdesignsComponent', () => {
  let component: BalloonsatdesignsComponent;
  let fixture: ComponentFixture<BalloonsatdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalloonsatdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonsatdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
