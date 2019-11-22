import { Component, OnInit } from '@angular/core';
import gql from "graphql-tag";
import {Observable} from "rxjs";
import {ConfigService} from "../../../../config/services/config.service";
import {ApolloService} from "../../../../data/services/apollo.service";
import {map} from "rxjs/operators";
import { EditableService } from '../../../../auth/services/editable.service';


//TODO: go for uid
const imageQuery = (type, sequence) => gql`
  query ImageQuery {
    ${type}( sequence : "${sequence}" ) {
      uid
      imageUrl
      sequence
      __typename
    }
  }
`;

const imageUpdateQuery = (type) => gql`
  mutation UpdateImage($sequence : String!, $imageUrl : String){
    Update${type}( sequence : $sequence, imageUrl : $imageUrl) {
			 imageUrl
    }
  }
`;

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  private type;
  private sequence;
  public item;
  public canEdit;
  public mouseover;

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
    this.canEdit = true;
    const query = imageQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.item = res.data[this.type][0];
      this.config.set('uid', this.item.uid);
    });
  }

  uploadImage() {
    this.apollo.sendUpdateQuery(imageUpdateQuery(this.type), { sequence : this.item.sequence, imageUrl : this.item.imageUrl }).subscribe(({ data }) => {
      console.log(data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

  public imageNotLoaded($event) {

  }

  public mouseenter() {
      this.mouseover = true;
  }

  public mouseleave() {
      this.mouseover = false;
  }
}
