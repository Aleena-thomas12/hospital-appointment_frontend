import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatChangeEmailBottomComponent } from './pat-change-email-bottom.component';

describe('PatChangeEmailBottomComponent', () => {
  let component: PatChangeEmailBottomComponent;
  let fixture: ComponentFixture<PatChangeEmailBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatChangeEmailBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatChangeEmailBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
