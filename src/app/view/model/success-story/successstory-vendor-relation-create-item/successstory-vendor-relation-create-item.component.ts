import { Component, Inject, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const allVendorsQuery = () => gql`
  query AllVendorsQuery {
    Vendor(filter : {}) {
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
  selector: 'app-successstory-vendor-relation-create-item',
  templateUrl: './successstory-vendor-relation-create-item.component.html',
  styleUrls: ['./successstory-vendor-relation-create-item.component.scss']
})
export class SuccessstoryVendorRelationCreateItemComponent implements OnInit {

  public successStorySequence;
  public allVendors;
  public newVendor;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public dialogRef: MatDialogRef<SuccessstoryVendorRelationCreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.successStorySequence = this.config.get('sequence');
  }

  ngOnInit() {
    this.apollo.sendQuery(allVendorsQuery(), {successStorySequence : this.successStorySequence}).subscribe(res => {
      this.allVendors = res.data['Vendor'];
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  addVendor() {
    this.dialogRef.close(this.newVendor);
  }

  displayFn(val) {
    return val ? val.translation[0].title : val;
  }

}
