import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { DataModule } from '../data.module';
import { Subject } from 'rxjs';

@Injectable({ providedIn : DataModule })
export class FileService {

  constructor(
    private http : HttpService,
  ){}
}