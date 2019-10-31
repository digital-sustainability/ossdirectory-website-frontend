import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';
import { SyncService } from './sync.service';
import { HttpService } from 'src/app/shared/sails/http.service';
import { HashService } from './hash.service';
import { HttpClientModule } from '@angular/common/http';

describe('RequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientModule],
    providers: [
      RequestService,
      SyncService,
      HashService,
      HttpService,
    ]
  }));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
