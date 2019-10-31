import { Data } from '../data';
import { IndustryQuery } from './query';
import { Property } from '../enums/null';
import { Modeltype } from '../enums/modeltype.enum';
import { Connector } from '../connector';

export class Industry extends Data {

  translations : Array<Data> = new Array();

  protected _deserialize(){
    this.translations = this.factory.cast(Modeltype.IndustryTranslation, this.translations);
  }
}

export class IndustryTranslation extends Data {

  title : string | Property = Property.NULL;
  description : string | Property = Property.NULL;

  language : Data | Property = Property.NULL;

  protected _deserialize(){}

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Industry:
        return child.add(this, "translations", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}