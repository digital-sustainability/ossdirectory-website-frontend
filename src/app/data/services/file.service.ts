import { Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { DataModule } from '../data.module';
import { Subject, Observable } from "rxjs";
import { ConfigService } from "../../config/services/config.service";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn : DataModule })
export class FileService {

  constructor(
    private http : HttpService,
    private config: ConfigService,
  ){}


  public uploadFile(fileToUpload: File): Observable<boolean> {

    const url = `${environment.apiURL}upload`;

    const sequence = this.config.get("uid"); // TODO: take uid for now
    const type = this.config.get("type").toLowerCase();
    const fileExtension = fileToUpload.name.split('.').pop();
    const filename = `${type}_${sequence}.${fileExtension}`;

    const formData: FormData = new FormData();
    formData.append('sequence', sequence);
    formData.append('type', type);
    formData.append('file', fileToUpload, filename);

    return this.http.post(
      url,
      formData,
      {
        'Content-Type': 'multipart/form-data',
      }).pipe(map(() => true));
  }
}
