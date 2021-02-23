import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimingsabComponent } from './work-timingsab.component';

describe('WorkTimingsabComponent', () => {
  let component: WorkTimingsabComponent;
  let fixture: ComponentFixture<WorkTimingsabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTimingsabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimingsabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
