import { Component, Inject, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
  selector: 'app-product-successstory-relation-create-item',
  templateUrl: './product-successstory-relation-create-item.component.html',
  styleUrls: ['./product-successstory-relation-create-item.component.scss']
})
export class ProductSuccessstoryRelationCreateItemComponent implements OnInit {

  public prodcutSequence;
  public allSuccessStories;
  public newSuccessStory;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public dialogRef: MatDialogRef<ProductSuccessstoryRelationCreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.prodcutSequence = this.config.get('sequence');
  }

  ngOnInit() {
    this.apollo.sendQuery(allSuccessStoriesQuery(), {productSequence : this.prodcutSequence}).subscribe(res => {
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
