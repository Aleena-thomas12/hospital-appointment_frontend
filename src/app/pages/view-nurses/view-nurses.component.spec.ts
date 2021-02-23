import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNursesComponent } from './view-nurses.component';

describe('ViewNursesComponent', () => {
  let component: ViewNursesComponent;
  let fixture: ComponentFixture<ViewNursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
