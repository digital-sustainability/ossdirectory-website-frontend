import { Data } from '../data';
import { Modeltype } from '../enums/modeltype.enum';
import { Property } from '../enums/null';
import { Connector } from '../connector';

export class SuccessStory extends Data {

  title : string | Property = Property.NULL;
  translations : Array<Data> = new Array();
  products : Array<Data> = new Array();
  client: Array<Data> = new Array();
  vendor: Array<Data> = new Array();

  protected _deserialize(){
    this.translations = this.factory.cast(Modeltype.SuccessStoryTranslation, this.translations);
    this.products = this.factory.cast(Modeltype.Product, this.products);
    this.client = this.factory.cast(Modeltype.Client, this.client);
    this.vendor = this.factory.cast(Modeltype.Vendor, this.vendor);
  }

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Vendor:
        return child.add(this, "successStories", connector)
        break;
      case Modeltype.Client:
        return child.add(this, "successStories", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}

export class SuccessStoryTranslation extends Data {

    language : Array<Data> = new Array();
    title : string | Property = Property.NULL;
    lead : string | Property = Property.NULL;
    base : string | Property = Property.NULL;
    goal : string | Property = Property.NULL;
    proposal : string | Property = Property.NULL;
    outcome : string | Property = Property.NULL;

  protected _deserialize() {}

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.SuccessStory:
        return child.add(this, "translations", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}
