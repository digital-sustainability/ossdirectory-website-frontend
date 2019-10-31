import { Data } from './data';
import { FactoryService } from './services/factory.service';

export abstract class Connector {
  constructor(public factory : FactoryService){}
  abstract deserialize();
}
