import { Data } from '../data';
import { Property } from '../enums/null';
import { Modeltype } from '../enums/modeltype.enum';
import { Connector } from '../connector';
import { Observable } from 'rxjs';
import { Pager } from '../pager';

export class Address extends Data {

    address : string | Property = Property.NULL;
    address2 : string | Property = Property.NULL;
    zip : string | Property = Property.NULL;
    city : string | Property = Property.NULL;
    state : string | Property = Property.NULL;
    country : string | Property = Property.NULL;

    protected _deserialize(){}

    protected _add(child : Data, key : string, connector? : Connector){
      switch (child.getName()) {
        case Modeltype.Client:
          return child.add(this, "address", connector)
          break;
        case Modeltype.Vendor:
          return child.add(this, "address", connector)
          break;
        case Modeltype.Community:
          return child.add(this, "address", connector)
          break;
        default:
          return super._add(child, key, connector);
          break;
      }
    }
}