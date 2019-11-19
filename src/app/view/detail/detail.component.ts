import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApolloService } from '../../data/services/apollo.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap, switchMap } from 'rxjs/operators';
import { pipe, combineLatest } from 'rxjs';
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
export class DetailComponent implements OnInit {
  public type;


  constructor(
    private apollo: ApolloService,
    private config: ConfigService,
    private route: RouteService,
  ) {}

  ngOnInit() {

    const sequence = this.config.get('sequence');
    const obs = this.apollo.getType(sequence).subscribe(type => {
      this.type = type;
    });

    const events = this.route.events();
    events.subscribe(() => {
        this.ngOnInit();
    });
  }

  private reload() {

  }

}
