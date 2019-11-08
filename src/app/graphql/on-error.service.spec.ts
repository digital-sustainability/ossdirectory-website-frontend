import { TestBed } from '@angular/core/testing';

import { OnErrorService } from './on-error.service';

describe('OnErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnErrorService = TestBed.get(OnErrorService);
    expect(service).toBeTruthy();
  });
});
