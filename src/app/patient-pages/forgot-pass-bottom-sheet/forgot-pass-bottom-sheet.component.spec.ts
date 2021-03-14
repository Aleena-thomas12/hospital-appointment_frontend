import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassBottomSheetComponent } from './forgot-pass-bottom-sheet.component';

describe('ForgotPassBottomSheetComponent', () => {
  let component: ForgotPassBottomSheetComponent;
  let fixture: ComponentFixture<ForgotPassBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
