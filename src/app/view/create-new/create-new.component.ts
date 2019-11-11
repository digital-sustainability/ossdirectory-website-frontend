import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/services/config.service';
import { ApolloService } from '../../data/services/apollo.service';
import gql from 'graphql-tag';
import { Router } from '@angular/router';


const createQuery = (type) => gql`
  mutation CreateTypeQuery {
    Create${type} {
      sequence
      __typename
    }
  }
`;

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  create(type) {
    const query = createQuery(type);
    this.apollo.mutateObservable(query).subscribe(res => {
      this.config.set('type', type);
      this.config.set('sequence', res.data['Create' + type].sequence);
      this.router.navigateByUrl(`/hier-kommt-spezifischer-text/${this.config.get('sequence')}/oder-auch-hier/bald-auch-ganz-dynamisch`)
      console.log(res.data)
      console.log(this.config.get('type'))
      console.log(this.config.get('sequence'))
    });
  }

}
