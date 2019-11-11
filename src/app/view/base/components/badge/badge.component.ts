import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import {ConfigService} from '../../../../config/services/config.service';
import {ApolloService} from '../../../../data/services/apollo.service';
import {ApolloQueryResult} from 'apollo-client';

const communityQuery = (type, sequence) => gql`
  query CommunityQuery {
    ${type}( sequence : "${sequence}" ) {
      communities {
        Community {
          sequence
          __typename
          imageUrl
            translations {
              sequence
              __typename
              title
            }
          }
      }
    }
  }
`;

const communityUpdateQuery = (type) => gql`
  mutation addCommunityTo${type}($sequence : String!, $community_sequence : String!){
  Add${type}Communities (
    from : { sequence : $sequence }
  	to : { sequence : $community_sequence }
  	data : { confirmed : false
    level : "1" }
  ) {
  	level
  }
}
`;

const allCommunitiesQuery = () => gql`
  query AlLCommunitiesQuery {
    Community(filter : {}) {
      sequence
      __typename
      imageUrl
      translation: translations(filter : {}) {
        language(filter: {short: "en"}) {
          short
        }
        sequence
        __typename
        title
      }
    }
  }
`;

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  private type;
  private sequence;
  public items;
  private allCommunities: ApolloQueryResult<any>;
  public community;
  addNew = false;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {
    this.type = config.get('type');
    this.sequence = config.get('sequence');
    console.log(this.sequence);

    const query = communityQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.items = res.data[this.type][0].communities;
      console.log(this.items);
    });
    this.apollo.sendQuery(allCommunitiesQuery()).subscribe(res => {
      this.allCommunities = res.data['Community'];
      console.log(this.allCommunities);
    });
  }

  ngOnInit() {
  }

  addCommunityBadge() {
    console.log(this.sequence);
    console.log(this.community);
    this.addNew = false;
    this.apollo.sendUpdateQuery(communityUpdateQuery(this.type),
      { sequence : this.sequence, community_sequence : this.community.sequence },
      communityQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  toggleAddNew() {
    this.addNew = !this.addNew;
  }

  displayFn(val) {
    return val ? val.translation[0].title : val;
  }

}
