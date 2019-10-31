import { Component, OnInit, Input } from '@angular/core';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../../config/services/config.service';

const gridQuery = (type) => gql`
  query GridQuery($first : Int, $offset : Int) {
    list : ${type}(first : $first, offset : $offset) {
      imageUrl
      sequence
      __typename
    }
  }
`;

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() item;

  public items : Observable<any>

  constructor(
    private config : ConfigService
  ) {}

  ngOnInit() {
    this.config.get("type");
  }
}
