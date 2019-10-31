import { Data } from '../data';
import { Organisation } from './organisation';
import { Modeltype } from '../enums/modeltype.enum';
import { CommunityQuery } from './query';
import { Property } from '../enums/null';
import { Connector } from '../connector';

export class Community extends Organisation {

  website : string | Property = Property.NULL;
  vendors : Array<Data> = new Array();
  clients : Array<Data> = new Array();
  products : Array<Data> = new Array();

  public _deserialize(){
    this.vendors = this.factory.cast(Modeltype.Vendor, this.vendors);
    this.clients = this.factory.cast(Modeltype.Client, this.clients);
    this.products = this.factory.cast(Modeltype.Product, this.products);
  }

  protected _add(child : Data, key : string, connector? : Connector){
    switch (child.getName()) {
      case Modeltype.Client:
        return child.add(this, "communities", connector)
        break;
      case Modeltype.Vendor:
        return child.add(this, "communities", connector)
        break;
      default:
        return super._add(child, key, connector);
        break;
    }
  }
}

export class CommunityMember extends Connector {

    confirmed : string | Property = Property.NULL;
    level : string | Property = Property.NULL;
    Vendor : Data | Property = Property.NULL;
    Client : Data | Property = Property.NULL;
    Community : Data | Property = Property.NULL;

    public deserialize(){
      this.Vendor = this.factory.cast(Modeltype.Vendor, this.Vendor)
      this.Client = this.factory.cast(Modeltype.Client, this.Client)
      this.Community = this.factory.cast(Modeltype.Community, this.Community)
    }
}
