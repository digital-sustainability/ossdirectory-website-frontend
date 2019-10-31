import { RouteModule } from '../route.module';
import { Injectable } from '@angular/core';
import { UrlSegment} from '@angular/router';
import { SegmentService } from './segment.service';
import { NEVER, merge, Subject } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';
import { RouteService } from './route.service';
import { Modeltype } from '../../data/enums/modeltype.enum';
import { ApolloService } from "../../data/services/apollo.service";

@Injectable({ providedIn : RouteModule })
export class DataService {

  private routeData : Subject<any> = new Subject();

  constructor(
      private apollo: ApolloService,
    private segment : SegmentService,
    private route : RouteService,
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
    return Modeltype[path];
  }

  private checkSegmentForID(segment : UrlSegment){
    let path = segment.path;
    if (!isNaN(+path)){
        return this.apollo.getType(path);
    }
    return NEVER;
  }
}