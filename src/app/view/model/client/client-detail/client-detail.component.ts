import { Component, OnInit } from '@angular/core';
import { ComponentType } from '@angular/cdk/typings/portal';
import { ClientSuccessstoryRelationCreateItemComponent } from '../client-successstory-relation-create-item/client-successstory-relation-create-item.component';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import gql from 'graphql-tag';

const clientQuery = (type, sequence) => gql`
  query ClientQuery {
    Client( sequence : "${sequence}" ) {
      successStories {
        sequence
        __typename
        imageUrl
        translations {
          title
          description
        }
      }
    }
  }
`;

const clientSuccessStoryUpdateQuery = () => gql`
  mutation addSuccessStoryToClient($sequence : String!, $successstory_sequence : String!){
    AddClientSuccessStories (
      from : { sequence : $sequence }
      to : { sequence : $successstory_sequence }
    ) {
      to {
        sequence
      }
    }
  }
`;

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  public clientSuccessStory: ComponentType<any> = ClientSuccessstoryRelationCreateItemComponent;
  public type;
  public sequence;
  public successStories;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {
    this.type = config.get('type');
    this.sequence = config.get('sequence');
    const query = clientQuery(this.type, this.sequence);
    this.apollo.sendQuery(query).subscribe(res => {
      this.successStories = res.data[this.type][0].successStories;
    });
  }

  ngOnInit() {
  }

  addSuccessStory(successStory) {

    this.apollo.sendUpdateQuery(clientSuccessStoryUpdateQuery(),
      { sequence : this.sequence, successstory_sequence : successStory.sequence },
      clientQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
