import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReschedulePageComponent } from './patient-reschedule-page.component';

describe('PatientReschedulePageComponent', () => {
  let component: PatientReschedulePageComponent;
  let fixture: ComponentFixture<PatientReschedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientReschedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReschedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
