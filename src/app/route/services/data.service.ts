import { RouteModule } from '../route.module';
import { Injectable } from '@angular/core';
import { UrlSegment} from '@angular/router';
import { SegmentService } from './segment.service';
import { FactoryService } from '../../data/services/factory.service';
import { NEVER, merge, Subject } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { RouteService } from './route.service';
import { Data } from '../../data/data';
import { Req } from '../../data/req';
import { Language } from '../../data/models/language';
import { RequestService } from '../../data/services/request.service';
import { Modeltype } from '../../data/enums/modeltype.enum';

@Injectable({ providedIn : RouteModule })
export class DataService {

  private routeData : Subject<Data|Data[]> = new Subject();

  constructor(
    private segment : SegmentService,
    private route : RouteService,
    private factory : FactoryService,
    private request : RequestService,
  ){
    this.onRouteChange();
  }

  private getData() {
    let segments = this.segment.segments();
    let data = segments.pipe(
      mergeMap(
        segment => {
          return merge(this.checkSegmentForModel(segment), this.checkSegmentForID(segment));
        }
      ),
      take(1) //complete after one entry is found
    );
    data.subscribe(data => this.routeData.next(data));
  }

  private onRouteChange() {
    let events = this.route.events();
    events.subscribe(event => this.getData())
  }

  public getRouteData() {
    return this.routeData;
  }

  private checkSegmentForModel(segment : UrlSegment){
    let path = segment.path;
    let data = this.factory.create(path);
    return data ? data.read() : NEVER;
  }

  private checkSegmentForID(segment : UrlSegment){
    let path = segment.path;
    if (!isNaN(+path)){
      let data = new Language(this.factory);
      data.sequence = path;
      let req = new Req("findBySequence", data, Modeltype.Language);
      return this.request.request(req);
    }
    return NEVER;
  }
}