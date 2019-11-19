import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ApolloService } from '../../data/services/apollo.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap, switchMap, skip, takeUntil } from 'rxjs/operators';
import { pipe, combineLatest, Subject } from "rxjs";
import { ConfigService } from '../../config/services/config.service';
import gql from 'graphql-tag';
import { RouteService } from "../../route/services/route.service";

const CreateQuery = (type) => gql`  mutation createModel{
    Create${type} {
        sequence
    }
}
`;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  public type;

  private terminateSubs = new Subject<void>();


  constructor(
    private apollo: ApolloService,
    private config: ConfigService,
    private route: RouteService,
  ) {}

  ngOnInit() {

    const sequence = this.config.get('sequence');
    const obs = this.apollo.getType(sequence).subscribe(type => {
        obs.unsubscribe();
        this.type = type;
      });

    const events = this.route.events();
    const subs = events.pipe(takeUntil(this.terminateSubs)).subscribe(() => {
        subs.unsubscribe();
        this.ngOnInit();
    });
  }

  ngOnDestroy() {
      this.terminateSubs.next();
      this.terminateSubs.complete();
  }
}
