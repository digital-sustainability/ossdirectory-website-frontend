import { TestBed } from '@angular/core/testing';

import { HashService } from './hash.service';

describe('HashService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HashService,
    ]
  }));

  it('should be created', () => {
    const service: HashService = TestBed.get(HashService);
    expect(service).toBeTruthy();
  });
});
