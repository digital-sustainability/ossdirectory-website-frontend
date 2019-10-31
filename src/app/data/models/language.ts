import { Data } from '../data';
import { Property } from '../enums/null';

export class Language extends Data {

    language : string | Property = Property.NULL;

    protected _deserialize(){}
}