import { TestBed, async } from '@angular/core/testing';

import { FileService } from './file.service';
import { RequestService } from './request.service';
import { HttpClientModule } from '@angular/common/http';

import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/shared/sails/http.service';
import { SyncService } from './sync.service';
import { GraphqlService } from './graphql.service';
import { HashService } from './hash.service';

describe('FileService', () => {
  beforeEach(async() => TestBed.configureTestingModule({
    imports : [HttpClientModule],
    providers: [
      FileService,
      RequestService,
      SyncService,
      GraphqlService,
      HashService,
      HttpService,
    ]
  }));

  it('should be created', () => {
    const service: FileService = TestBed.get(FileService);
    expect(service).toBeTruthy();
  });
});
