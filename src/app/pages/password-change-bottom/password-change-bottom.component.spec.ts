import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordChangeBottomComponent } from './password-change-bottom.component';

describe('PasswordChangeBottomComponent', () => {
  let component: PasswordChangeBottomComponent;
  let fixture: ComponentFixture<PasswordChangeBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordChangeBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordChangeBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
