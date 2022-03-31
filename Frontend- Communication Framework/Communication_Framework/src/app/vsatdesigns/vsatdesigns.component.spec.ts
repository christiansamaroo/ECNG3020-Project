import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsatdesignsComponent } from './vsatdesigns.component';

describe('VsatdesignsComponent', () => {
  let component: VsatdesignsComponent;
  let fixture: ComponentFixture<VsatdesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsatdesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsatdesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
