import { TestBed } from '@angular/core/testing';

import { AuthGuardSidemenuService } from './auth-guard-sidemenu.service';

describe('AuthGuardSidemenuService', () => {
  let service: AuthGuardSidemenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardSidemenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
