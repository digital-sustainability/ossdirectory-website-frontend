import { Component, OnInit } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import gql from "graphql-tag";
import {Observable} from "rxjs";
import {ConfigService} from "../../../../config/services/config.service";
import {ApolloService} from "../../../../data/services/apollo.service";
import { EditableService } from '../../../../auth/services/editable.service';

const descriptionQuery = (type, sequence) => gql`
  query DescriptionQuery {
    ${type}( sequence : "${sequence}" ) {
      translations {
        description
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

const descriptionUpdateQuery = (type) => gql`
  mutation UpdateDescription($sequence : String!, $description : String){
    Update${type}Translation( sequence : $sequence, description : $description) {
			 description
    }
  }
`;

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public Editor = BalloonEditor;

  private type;
  private sequence;
  public item;
  public canEdit;

  constructor(
    public config : ConfigService,
    public apollo : ApolloService,
    public editable: EditableService
  ) {

  }

  ngOnInit() {
    this.type = this.config.get("type");
    this.sequence = this.config.get("sequence");
    this.canEdit = this.editable.isEditable();

    const query = descriptionQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.item = res.data[this.type][0].translations[0];
      console.log(this.item)
    });
  }

  update() {
    this.apollo.sendUpdateQuery(descriptionUpdateQuery(this.type), { sequence : this.item.sequence, description : this.item.description }).subscribe(({ data }) => {
      console.log(data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
