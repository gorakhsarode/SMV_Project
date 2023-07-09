import { TestBed } from '@angular/core/testing';

import { AdminRoutResolver } from './admin-rout.resolver';

describe('AdminRoutResolver', () => {
  let resolver: AdminRoutResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AdminRoutResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
