import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { homeautomationguardGuard } from './homeautomationguard-guard';

describe('homeautomationguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => homeautomationguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
