import { Data } from '../data';
import { Organisation } from './organisation';
import { Property } from '../enums/null';
import { Connector } from '../connector';
import { Subject } from 'rxjs';
import { Modeltype } from '../enums/modeltype.enum';
import { Req } from '../req';

export class Vendor extends Organisation {
  
  products : Array<Connector> = new Array();
  successStories : Array<Data> = new Array();
  communities : Array<Data> = new Array();

  protected _deserialize(){
      super._deserialize();
      this.products = this.factory.cast(Modeltype.VendorProductServices, this.products);
      this.successStories = this.factory.cast(Modeltype.SuccessStory, this.successStories);
      this.communities = this.factory.cast(Modeltype.Community, this.communities);
  }
}

export class VendorProductServices extends Connector {

  service_type : string | Property = Property.NULL;
  Vendor : Data | Property = Property.NULL;
  Product : Data | Property = Property.NULL;

  public deserialize(){
    this.Vendor = this.factory.cast(Modeltype.Vendor, this.Vendor);
    this.Product = this.factory.cast(Modeltype.Product, this.Product);
  }
}
