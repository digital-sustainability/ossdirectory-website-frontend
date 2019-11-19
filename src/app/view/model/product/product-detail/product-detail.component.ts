import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ComponentType } from '@angular/cdk/typings/portal';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import { ProductVendorRelationCreateItemComponent } from '../product-vendor-relation-create-item/product-vendor-relation-create-item.component';
import { ProductSuccessstoryRelationCreateItemComponent } from '../product-successstory-relation-create-item/product-successstory-relation-create-item.component';

const productQuery = (type, sequence) => gql`
  query ProductQuery {
    Product( sequence : "${sequence}" ) {
      successStories {
        sequence
        uid
        __typename
        imageUrl
        logo
        translations {
          title
          description
        }
      }
      vendors {
        Vendor {
          sequence
          uid
          __typename
          imageUrl
          logo
          translations {
            title
            description
          }
        }
      }
    }
  }
`;

const productSuccessStoryUpdateQuery = () => gql`
  mutation addSuccessStoryToProduct($sequence : String!, $successstory_sequence : String!){
    AddProductSuccessStories (
      from : { sequence : $successstory_sequence }
      to : { sequence : $sequence }
    ) {
      to {
        sequence
      }
    }
  }
`;

const productVendorUpdateQuery = () => gql`
  mutation addVendorToProduct($sequence : String!, $vendor_sequence : String!){
    AddProductVendors (
      from : { sequence : $vendor_sequence }
      to : { sequence : $sequence }
      data : {
        claim : "Hello there, new vendor! ;)" }
    ) {
      to {
        sequence
      }
    }
  }
`;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private type;
  private sequence;
  public vendors;
  public successStories;
  public productVendor: ComponentType<any> = ProductVendorRelationCreateItemComponent;
  public productSuccessStory: ComponentType<any> = ProductSuccessstoryRelationCreateItemComponent;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {
    this.type = config.get('type');
    this.sequence = config.get('sequence');

    const query = productQuery(this.type, this.sequence);
    this.apollo.sendQuery(query).subscribe(res => {
      this.vendors = res.data[this.type][0].vendors;
      console.log(this.vendors)
      this.successStories = res.data[this.type][0].successStories;
    });
  }

  ngOnInit() {
  }

  addSuccessStory(successStory) {
    this.apollo.sendUpdateQuery(productSuccessStoryUpdateQuery(),
      { sequence : this.sequence, successstory_sequence : successStory.sequence },
      productQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  addVendor(vendor) {
    this.apollo.sendUpdateQuery(productVendorUpdateQuery(),
      { sequence : this.sequence, vendor_sequence : vendor.sequence },
      productQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
