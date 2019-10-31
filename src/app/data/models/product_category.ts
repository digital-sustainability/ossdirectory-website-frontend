import { Data } from '../data';
import { ProductCategoryQuery } from './query';
import { Property } from '../enums/null';
import { Modeltype } from '../enums/modeltype.enum';
import { Connector } from '../connector';

export class ProductCategory extends Data{

  translations : Array<Data> = new Array();

  protected _deserialize(){
    this.translations = this.factory.cast(Modeltype.ProductCategoryTranslation, this.translations);
  }

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Product:
        return child.add(this, "category", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}

export class ProductCategoryTranslation extends Data {

  
  title : string | Property = Property.NULL;
  groups : string | Property = Property.NULL;
  description : string | Property = Property.NULL;

  language : Data | Property = Property.NULL;

  protected _deserialize(){}

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.ProductCategory:
        return child.add(this, "translations", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }


}