import { TestBed } from '@angular/core/testing';

import { IdResolver } from './id.resolver';

describe('IdResolver', () => {
  let resolver: IdResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IdResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
