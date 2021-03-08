import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaageToastersComponent } from './messaage-toasters.component';

describe('MessaageToastersComponent', () => {
  let component: MessaageToastersComponent;
  let fixture: ComponentFixture<MessaageToastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessaageToastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessaageToastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
