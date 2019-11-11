import {Component, Inject, OnInit} from '@angular/core';
import {ConfigService} from '../../../../config/services/config.service';
import {ApolloService} from '../../../../data/services/apollo.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import gql from 'graphql-tag';

const allSuccessStoriesQuery = () => gql`
  query AllSuccessStoriesQuery {
    SuccessStory(filter : {}) {
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
  selector: 'app-vendor-successstory-relation-create-item',
  templateUrl: './vendor-successstory-relation-create-item.component.html',
  styleUrls: ['./vendor-successstory-relation-create-item.component.scss']
})
export class VendorSuccessstoryRelationCreateItemComponent implements OnInit {

  public vendorSequence;
  public allSuccessStories;
  public newSuccessStory;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public dialogRef: MatDialogRef<VendorSuccessstoryRelationCreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.vendorSequence = this.config.get('sequence');
  }

  ngOnInit() {
    this.apollo.sendQuery(allSuccessStoriesQuery(), {vendorSequence : this.vendorSequence}).subscribe(res => {
      this.allSuccessStories = res.data['SuccessStory'];
      console.log(this.allSuccessStories);
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  addSuccessStory() {
    this.dialogRef.close(this.newSuccessStory);
  }

  displayFn(val) {
    return val ? val.translation[0].title : val;
  }

}
