import { RouteModule } from '../route.module';
import { Injectable } from '@angular/core';
import { PRIMARY_OUTLET, UrlTree, UrlSegment} from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';
import { RouteService } from './route.service';
import { from, EMPTY } from 'rxjs';

@Injectable({ providedIn : RouteModule })
export class SegmentService {

  constructor(
    private route : RouteService
  ){}

  public segments() {
    let url = this.route.url();
    return url.pipe(
      switchMap(urlTree => {
        let children = urlTree.root.children[PRIMARY_OUTLET]
        let segments : UrlSegment[] = children ? children.segments : null;
        if (segments) segments.reverse(); //reverse order such that last segment gets first
        return segments ? from(segments) : EMPTY
      }) 
    );

  }
}