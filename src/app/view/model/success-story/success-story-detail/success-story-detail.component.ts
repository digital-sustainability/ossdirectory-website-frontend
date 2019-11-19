import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { ComponentType } from '@angular/cdk/typings/portal';
import { ConfigService } from '../../../../config/services/config.service';
import { ApolloService } from '../../../../data/services/apollo.service';
import { SuccessstoryProductRelationCreateItemComponent } from '../successstory-product-relation-create-item/successstory-product-relation-create-item.component';
import { SuccessstoryClientRelationCreateItemComponent } from '../successstory-client-relation-create-item/successstory-client-relation-create-item.component';
import { SuccessstoryVendorRelationCreateItemComponent } from '../successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component';

const successStoryQuery = (type, sequence) => gql`
  query SuccessStoryQuery {
    SuccessStory( sequence : "${sequence}" ) {
      client {
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
      vendor {
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
      products {
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
`;

const successStoryProductUpdateQuery = () => gql`
  mutation addProductToSuccessStory($sequence : String!, $product_sequence : String!){
    AddSuccessStoryProducts (
      from : { sequence : $sequence }
      to : { sequence : $product_sequence }
    ) {
      to {
        sequence
      }
    }
  }
`;

const successStoryClientUpdateQuery = () => gql`
  mutation addClientToSuccessStory($sequence : String!, $client_sequence : String!){
    AddSuccessStoryClient (
      from : { sequence : $client_sequence }
      to : { sequence : $sequence }
    ) {
      from {
        sequence
      }
    }
  }
`;

const successStoryVendorUpdateQuery = () => gql`
  mutation addVendorToSuccessStory($sequence : String!, $vendor_sequence : String!){
    AddSuccessStoryVendor (
      from : { sequence : $vendor_sequence }
      to : { sequence : $sequence }
    ) {
      from {
        sequence
      }
    }
  }
`;

@Component({
  selector: 'app-success-story-detail',
  templateUrl: './success-story-detail.component.html',
  styleUrls: ['./success-story-detail.component.scss'],
})
export class SuccessStoryDetailComponent implements OnInit {

  private type;
  private sequence;
  public products;
  public client;
  public vendor;
  public successStoryProduct: ComponentType<any> = SuccessstoryProductRelationCreateItemComponent;
  public successStoryClient: ComponentType<any> = SuccessstoryClientRelationCreateItemComponent;
  public successStoryVendor: ComponentType<any> = SuccessstoryVendorRelationCreateItemComponent;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {
    this.type = config.get('type');
    this.sequence = config.get('sequence');

    const query = successStoryQuery(this.type, this.sequence);
    this.apollo.sendQuery(query).subscribe(res => {
      console.log(res)
      this.products = res.data[this.type][0].products;
      this.client = res.data[this.type][0].client;
      this.vendor = res.data[this.type][0].vendor;
    });
  }

  ngOnInit() {
  }

  addVendor(vendor) {
    this.apollo.sendUpdateQuery(successStoryVendorUpdateQuery(),
      { sequence : this.sequence, vendor_sequence : vendor.sequence },
      successStoryQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  addClient(client) {
    this.apollo.sendUpdateQuery(successStoryClientUpdateQuery(),
      { sequence : this.sequence, client_sequence : client.sequence },
      successStoryQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  addProduct(product) {
    this.apollo.sendUpdateQuery(successStoryProductUpdateQuery(),
      { sequence : this.sequence, product_sequence : product.sequence },
      successStoryQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
