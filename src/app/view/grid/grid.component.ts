import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/services/config.service';
import gql from 'graphql-tag';
import { ApolloService } from '../../data/services/apollo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(public config : ConfigService){}

  ngOnInit() {}
}
