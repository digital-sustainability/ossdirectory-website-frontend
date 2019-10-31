import { Data } from '../data';
import { Modeltype } from '../enums/modeltype.enum';
import { Property } from '../enums/null';
import { Req } from '../req';
import { Connector } from '../connector';

export class Product extends Data {

  logo : string | Property = Property.NULL;
  title : string | Property = Property.NULL;
  links : string | Property = Property.NULL;
  source_code_link : string | Property = Property.NULL;
  
  translations : Array<Data> = new Array();
  vendors : Array<Data> = new Array();   
  clients : Array<Data> = new Array();  
  communities : Array<Data> = new Array();
  successStories : Array<Data> = new Array();
  category : Data | Property = Property.NULL;

  public _deserialize() {
    this.vendors = this.factory.cast(Modeltype.VendorProductServices, this.vendors);
    this.translations = this.factory.cast(Modeltype.ProductTranslation, this.translations);
    this.clients = this.factory.cast(Modeltype.Client, this.clients);
    this.communities = this.factory.cast(Modeltype.Community, this.communities);
    this.successStories = this.factory.cast(Modeltype.SuccessStory, this.successStories);
    this.category = this.factory.cast(Modeltype.ProductCategory, this.category);
  }

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Vendor:
        return child.add(this, "products", connector)
        break;
      case Modeltype.Client:
        return child.add(this, "products", connector)
        break;
      case Modeltype.Community:
        return child.add(this, "products", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}

export class ProductTranslation extends Data {

  title : string | Property = Property.NULL;
  language : Data | Property = Property.NULL;
  description : string | Property = Property.NULL;

  public _deserialize() {
    this.language = this.factory.cast(Modeltype.Language, this.language);
  }

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Product:
        return child.add(this, "translations", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}

