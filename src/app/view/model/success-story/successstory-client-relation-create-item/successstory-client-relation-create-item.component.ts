import { Component, Inject, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const allClientsQuery = () => gql`
  query AllClientsQuery {
    Client(filter : {}) {
      sequence
      __typename
      imageUrl
      translation: translations(filter : { language : { short : "en"}}) {
        language {
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
  selector: 'app-successstory-client-relation-create-item',
  templateUrl: './successstory-client-relation-create-item.component.html',
  styleUrls: ['./successstory-client-relation-create-item.component.scss']
})
export class SuccessstoryClientRelationCreateItemComponent implements OnInit {

  public successStorySequence;
  public allClients;
  public newClient;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public dialogRef: MatDialogRef<SuccessstoryClientRelationCreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.successStorySequence = this.config.get('sequence');
  }

  ngOnInit() {
    this.apollo.sendQuery(allClientsQuery(), {successStorySequence : this.successStorySequence}).subscribe(res => {
      this.allClients = res.data['Client'];
      console.log(this.allClients)
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  addClient() {
    this.dialogRef.close(this.newClient);
  }

  displayFn(val) {
    return val ? val.translation[0].title : val;
  }

}
