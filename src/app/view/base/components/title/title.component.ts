import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ConfigService} from "../../../../config/services/config.service";
import {ApolloService} from "../../../../data/services/apollo.service";
import gql from "graphql-tag";
import { EditableService } from '../../../../auth/services/editable.service';

const titleQuery = (type, sequence) => gql`
  query ClaimQuery {
    ${type}( sequence : "${sequence}" ) {
      translations {
        title
        language {
          short
        }
        sequence
        __typename
      }
      sequence
      __typename
    }
  }
`;

const titleUpdateQuery = (type) => gql`
   mutation UpdateDescription($sequence : String!, $title : String){
    Update${type}Translation( sequence : $sequence, title : $title) {
			 title
    }
  }
`;

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  private type;
  private sequence;
  public item;
  public canEdit;

  constructor(
    public config : ConfigService,
    public apollo : ApolloService,
    public editable: EditableService
  ) {
    this.type = config.get("type");
    this.sequence = config.get("sequence");
    this.canEdit = this.editable.isEditable();

    const query = titleQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.item = res.data[this.type][0].translations[0];
      console.log(this.item);
    });
  }

  ngOnInit() {
  }

  update() {
    this.apollo.sendUpdateQuery(titleUpdateQuery(this.type), { sequence : this.item.sequence, title : this.item.title }).subscribe(({ data }) => {
      console.log(data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
