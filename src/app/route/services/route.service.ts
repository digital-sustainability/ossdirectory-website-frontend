import { RouteModule } from '../route.module';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd, UrlTree, Event } from '@angular/router';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn : RouteModule })
export class RouteService {


  constructor(
    private router : Router){
  }

  public url() : Observable<UrlTree> {
    return of(this.router.parseUrl(this.router.url));
  }

  public events() : Observable<Event> {
    return this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }
}