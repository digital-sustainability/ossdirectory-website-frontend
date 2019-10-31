import { Injectable } from '@angular/core';
import { Data } from '../data';
import { HttpService } from 'src/app/shared/sails/http.service';
import { environment } from 'src/environments/environment';
import { concatMap, tap } from 'rxjs/operators';
import { DataModule } from '../data.module';
import { Subject } from 'rxjs';
import { HashService } from './hash.service';
import { Req } from '../req';
import { Pager } from '../pager';

@Injectable({ providedIn : DataModule })
export class RequestService {

  private subject = new Subject<Req>();

  constructor(
    private http : HttpService,
    private hash : HashService,
  ) {
    this.build();
  }

  public request(req : Req, pager? : Pager){
    let placeholder = pager ? pager : new Pager(this, req);
    req.observable = placeholder;
    this.subject.next(req);
    return placeholder;
  }

  private build() {
    this.subject.pipe(
      concatMap(request => {
        let subject = request.observable;
        delete request.observable;
        let model = request.model;
        this.cleanRequest(request);
        let obs = this.http.post(environment.apiURL + "api/gql", request);
        

        obs = this.updateModel(model, obs);
        obs = this.pushResponseToRequestor(obs, subject, model);
        obs = this.addDataToStream(obs, model);
        return obs;
      })
    ).subscribe();
  }

  private pushResponseToRequestor(obs, subject, model) {
    return obs.pipe( tap(data => {
      let extractedData = this.extractData(data, model);
      subject.next(extractedData);
    }));
  }

  private cleanRequest(request){
    for (let obj in request){
      if (request[obj] instanceof Object){
        request[obj] = this.hash.ignoreObjects(request[obj]);
      }
    }
  }

  public updateModel(model : Data, obs) {
    return obs.pipe( tap(res => {
      if (res["data"] && res["data"]["entry"]) {
        Object.assign(model, res["data"]["entry"][0])
      }
    }));
  }

  private extractData(response, model : Data) : Data[]{
    console.log(response);
    if (!response['data']) return null;
    if (response['data']["entry"] && response['data']["entry"][0]) {
      let entry = response['data']["entry"][0]
      return model.factory.cast(entry.type, entry);
    }
    if (response['data']["list"]) {
      return model.factory.cast(model.getName(), response['data']["list"])
    }
    return null;
  }

  private addDataToStream(obs, model){
    return obs;
    // return obs.pipe(
    //   map( (data) => {
    //     let extractedData = this.extractData(data, model);
    //     let containers = new Array();
    //     for (let d of extractedData){
    //       containers.push(new DataContainer(d, d.getName() as Modeltype))
    //     }
    //     this.stream.stream.next(containers);
    //     return containers;
    //   })
    // );
  }
}
