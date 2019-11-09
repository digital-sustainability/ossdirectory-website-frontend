import { Component, Inject, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

const allProductsQuery = () => gql`
  query AllProductsQuery {
    Product(filter : {}) {
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
  selector: 'app-successstory-product-relation-create-item',
  templateUrl: './successstory-product-relation-create-item.component.html',
  styleUrls: ['./successstory-product-relation-create-item.component.scss']
})
export class SuccessstoryProductRelationCreateItemComponent implements OnInit {

  public successStorySequence;
  public allProducts;
  public newProduct;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public dialogRef: MatDialogRef<SuccessstoryProductRelationCreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.successStorySequence = this.config.get('sequence');
  }

  ngOnInit() {
    this.apollo.sendQuery(allProductsQuery(), {successStorySequence : this.successStorySequence}).subscribe(res => {
      this.allProducts = res.data['Product'];
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  addProduct() {
    this.dialogRef.close(this.newProduct);
  }

  displayFn(val) {
    return val ? val.translation[0].title : val;
  }

}
