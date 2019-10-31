import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApolloService } from '../../data/services/apollo.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap, switchMap } from 'rxjs/operators';
import { pipe, combineLatest } from 'rxjs';
import { ConfigService } from '../../config/services/config.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  public type;

 
  constructor(
    private apollo : ApolloService,
    private config : ConfigService,
  ) {
    const sequence = this.config.get("sequence");
    const obs = this.apollo.getType(sequence).subscribe( type => {
      this.type = type;
    });

    // obs.subscribe(); //automatically sets type in config service

  }
  
}
