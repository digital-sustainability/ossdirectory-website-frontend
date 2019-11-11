import {Component, Inject, Input, OnInit} from '@angular/core';
import {ConfigService} from '../../../../config/services/config.service';
import {ApolloService} from '../../../../data/services/apollo.service';
import gql from 'graphql-tag';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

const allProductsQuery = () => gql`
  query AllProductsQuery($vendorSequence : String!) {
    Product(filter : { vendors : { Vendor : {sequence_not: $vendorSequence}}}) {
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
  selector: 'app-vendor-product-relation-create-item',
  templateUrl: './vendor-product-relation-create-item.component.html',
  styleUrls: ['./vendor-product-relation-create-item.component.scss']
})
export class VendorProductRelationCreateItemComponent implements OnInit {

  public vendorSequence;
  public allProducts;
  public newProduct;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public dialogRef: MatDialogRef<VendorProductRelationCreateItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.vendorSequence = this.config.get('sequence');
  }

  ngOnInit() {
    this.apollo.sendQuery(allProductsQuery(), {vendorSequence : this.vendorSequence}).subscribe(res => {
      this.allProducts = res.data['Product'];
      console.log(this.allProducts);
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


