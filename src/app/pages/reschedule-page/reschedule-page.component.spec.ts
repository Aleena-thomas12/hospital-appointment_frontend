import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReschedulePageComponent } from './reschedule-page.component';

describe('ReschedulePageComponent', () => {
  let component: ReschedulePageComponent;
  let fixture: ComponentFixture<ReschedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReschedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReschedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
