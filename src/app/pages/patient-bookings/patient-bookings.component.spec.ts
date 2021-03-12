import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBookingsComponent } from './patient-bookings.component';

describe('PatientBookingsComponent', () => {
  let component: PatientBookingsComponent;
  let fixture: ComponentFixture<PatientBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
