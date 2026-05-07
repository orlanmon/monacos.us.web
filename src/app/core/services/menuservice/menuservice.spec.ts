import { TestBed } from '@angular/core/testing';

import { Menuservice } from './menuservice';

describe('Menuservice', () => {
  let service: Menuservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menuservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
