import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/sails/http.service';
import { DataModule } from '../data.module';
import { environment } from 'src/environments/environment';
import { HashService } from './hash.service';
import { Data } from '../data';
import { RequestService } from './request.service';
import { Subject } from 'rxjs';

@Injectable({ providedIn : DataModule })
export class FileService {

  constructor(
    private http : HttpService,
    private hash : HashService,
    private req : RequestService,
  ){}

  public upload(modeltype : string, file : any, model : Data, attr_name : string) {

    let form = new FormData();
    form.append("modeltype", modeltype)
    form.append("model", JSON.stringify(this.hash.ignoreObjects(model)))
    form.append("param", attr_name)
    form.append("file", file)

    let obs = this.http.post(environment.apiURL + environment.fileRoute, form);
    obs = this.req.updateModel(model, obs);
    let subject = new Subject();
    obs.subscribe(res => subject.next(model))

    return subject;
  }
}