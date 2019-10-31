import { Data } from '../data';
import { Language } from './language';
import { Modeltype } from '../enums/modeltype.enum';
import { Property } from '../enums/null';
import { Connector } from '../connector';

export abstract class Organisation extends Data {

    title : string | Property = Property.NULL;
    url : string | Property = Property.NULL;
    imageUrl : string | Property = Property.NULL;
    sequence : string | Property = Property.NULL;
    address : Data | Property = Property.NULL;
    translations : Array<Data> = new Array();

  protected _deserialize() {
    this.address = this.factory.cast(Modeltype.Address, this.address);
    this.translations = this.factory.cast(Modeltype.OrganisationTranslation, this.translations);
  }
}

export class OrganisationTranslation extends Data {

    title       : string | Property = Property.NULL;
    language    : Data | Property = Property.NULL;
    description : string | Property = Property.NULL;
    contact     : string | Property = Property.NULL;
    claim       : string | Property = Property.NULL;

  protected _deserialize() {
    this.language = this.factory.cast(Modeltype.Language, this.language);
  }

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Client:
        return child.add(this, "translations", connector)
        break;
      case Modeltype.Vendor:
        return child.add(this, "translations", connector)
        break;
      case Modeltype.Community:
        return child.add(this, "translations", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}
