import {Component, OnInit} from '@angular/core';
import gql from "graphql-tag";
import {ConfigService} from "../../../../config/services/config.service";
import {ApolloService} from "../../../../data/services/apollo.service";
import {ComponentType} from "@angular/cdk/typings/portal";
import {VendorProductRelationCreateItemComponent} from "../vendor-product-relation-create-item/vendor-product-relation-create-item.component";
import {VendorSuccessstoryRelationCreateItemComponent} from "../vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component";

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
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss'],
})
export class VendorDetailComponent implements OnInit {

  private type;
  private sequence;
  public products;
  public successStories;
  public addNewSuccessStory: boolean = false;
  public addNewProduct: boolean = false;
  public newSuccessStory;
  public newProduct;
  public allProducts;
  public allSuccessStories;
  public vendorProduct : ComponentType<any> = VendorProductRelationCreateItemComponent;
  public vendorSuccessStory : ComponentType<any> = VendorSuccessstoryRelationCreateItemComponent;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {
    this.type = config.get("type");
    this.sequence = config.get("sequence");
    console.log(this.sequence)

    const query = vendorQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.products = res.data[this.type][0].products;
      this.successStories = res.data[this.type][0].successStories;
      console.log(this.products)
      console.log(this.successStories)
    });
    this.apollo.sendQuery(allProductsQuery()).subscribe(res => {
      this.allProducts = res.data['Product'];
      console.log(this.allProducts)
    });
    this.apollo.sendQuery(allSuccessStoriesQuery()).subscribe(res => {
      this.allSuccessStories = res.data['SuccessStory'];
      console.log(this.allSuccessStories)
    });
  }

  ngOnInit() {
    console.log("vendor detail component")
  }

  toggleAddNewSuccessStory() {
    this.addNewSuccessStory = !this.addNewSuccessStory;
  }

  toggleAddNewProdcut() {
    this.addNewProduct = !this.addNewProduct;
  }

  displayFn(val) {
    return val ? val.translation[0].title : val;
  }

  addSuccessStory(successStory) {

    this.apollo.sendUpdateQuery(vendorSuccessStoryUpdateQuery(), { sequence : this.sequence, successstory_sequence : successStory.sequence }, vendorQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

  addProduct(product) {

    this.apollo.sendUpdateQuery(vendorProductUpdateQuery(), { sequence : this.sequence, product_sequence : product.sequence }, vendorQuery(this.type, this.sequence)).subscribe(({ data }) => {
      console.log(data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }

}
