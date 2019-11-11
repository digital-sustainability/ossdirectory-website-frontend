import {Component, OnInit} from '@angular/core';
import gql from 'graphql-tag';
import {ConfigService} from '../../../../config/services/config.service';
import {ApolloService} from '../../../../data/services/apollo.service';
import {ComponentType} from '@angular/cdk/typings/portal';
import {VendorProductRelationCreateItemComponent} from '../vendor-product-relation-create-item/vendor-product-relation-create-item.component';
import {VendorSuccessstoryRelationCreateItemComponent} from '../vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component';

const vendorQuery = (type, sequence) => gql`
  query VendorQuery {
    Vendor( sequence : "${sequence}" ) {
      successStories {
        sequence
        __typename
        imageUrl
        translations {
          title
          description
        }
      }
      products {
        Product {
          sequence
          __typename
          imageUrl
          translations {
            title
            description
          }
        }
      }
    }
  }
`;

const vendorProductUpdateQuery = () => gql`
  mutation addProductToVendor($sequence : String!, $product_sequence : String!){
  AddVendorProducts (
    from : { sequence : $sequence }
  	to : { sequence : $product_sequence }
  	data : {
    claim : "Hello there, new product! ;)" }
  ) {
  	claim
  }
}
`;

const vendorSuccessStoryUpdateQuery = () => gql`
  mutation addSuccessStoryToVendor($sequence : String!, $successstory_sequence : String!){
  AddVendorSuccessStories (
    from : { sequence : $sequence }
  	to : { sequence : $successstory_sequence }
  ) {
  	to {
  	  sequence
  	}
  }
}
`;

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss'],
})
export class VendorDetailComponent implements OnInit {

  private type;
  private sequence;
  public products;
  public successStories;
  public vendorProduct: ComponentType<any> = VendorProductRelationCreateItemComponent;
  public vendorSuccessStory: ComponentType<any> = VendorSuccessstoryRelationCreateItemComponent;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {
    this.type = config.get('type');
    this.sequence = config.get('sequence');

    const query = vendorQuery(this.type, this.sequence);
    this.apollo.sendQuery(query).subscribe(res => {
      this.products = res.data[this.type][0].products;
      this.successStories = res.data[this.type][0].successStories;
    });
  }

  ngOnInit() {
  }

  addSuccessStory(successStory) {
    this.apollo.sendUpdateQuery(vendorSuccessStoryUpdateQuery(),
      { sequence : this.sequence, successstory_sequence : successStory.sequence },
      vendorQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  addProduct(product) {
    this.apollo.sendUpdateQuery(vendorProductUpdateQuery(),
      { sequence : this.sequence, product_sequence : product.sequence },
      vendorQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
