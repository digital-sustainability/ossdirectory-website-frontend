import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../config/services/config.service';
import gql from 'graphql-tag';
import { ApolloService } from '../../data/services/apollo.service';
import { Observable, Subject } from "rxjs";
import { RouteService } from "../../route/services/route.service";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {

  constructor(
      public config : ConfigService,
    ){}

  ngOnInit() {
    //   const subject = this.config.getSubject();
    //   subject.subscribe(() => {
    //       this.ngOnInit();
    //   });
  }

  ngOnDestroy() {
  }
}
