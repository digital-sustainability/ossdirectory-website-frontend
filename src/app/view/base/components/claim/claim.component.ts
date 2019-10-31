import { Component, OnInit } from '@angular/core';
import gql from "graphql-tag";
import {Observable} from "rxjs";
import {ConfigService} from "../../../../config/services/config.service";
import {ApolloService} from "../../../../data/services/apollo.service";

const claimQuery = (type, sequence) => gql`
  query ClaimQuery {
    ${type}( sequence : "${sequence}" ) {
      translations {
        claim
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

const claimUpdateQuery = (type) => gql`
  mutation UpdateClaim($sequence : String!, $claim : String){
    Update${type}Translation( sequence : $sequence, claim : $claim) {
			 claim
    }
  }
`;

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  private type;
  private sequence;
  public item;

  constructor(
    public config : ConfigService,
    public apollo : ApolloService,
  ) {
    this.type = config.get("type");
    this.sequence = config.get("sequence");


    const query = claimQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.item = res.data[this.type][0].translations[0];
      console.log(this.item)
    });
  }

  ngOnInit() {

  }

  update() {
    this.apollo.sendUpdateQuery(claimUpdateQuery(this.config.getTranslationType(this.type)), { sequence : this.item.sequence, claim : this.item.claim }).subscribe(({ data }) => {
      console.log(data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
