import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatChangePasswordBottomComponent } from './pat-change-password-bottom.component';

describe('PatChangePasswordBottomComponent', () => {
  let component: PatChangePasswordBottomComponent;
  let fixture: ComponentFixture<PatChangePasswordBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatChangePasswordBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatChangePasswordBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
