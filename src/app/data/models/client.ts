import { Organisation } from './organisation';
import { Data } from '../data';
import { Modeltype } from '../enums/modeltype.enum';
import { Property } from '../enums/null';

export class Client extends Organisation {

    industry : Data | Property = Property.NULL;
    communities : Array<Data> = new Array();
    successStories : Array<Data> = new Array();


    protected _deserialize(){
      this.industry = this.factory.cast(Modeltype.Industry, this.industry);
      this.communities = this.factory.cast(Modeltype.Community, this.communities);
      this.successStories = this.factory.cast(Modeltype.SuccessStory, this.successStories);
    }
}
