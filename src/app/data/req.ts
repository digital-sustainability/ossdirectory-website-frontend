import { Data } from './data';
import { Connector } from './connector';

export class Req {
  constructor(
    
    public action : string,
    public model : Data,
    public modeltype : string,
    public child? : Data,
    public param? : string,
    public connector? : Connector,
    public connector_param? : string,
    public first : number = 10,
    public offset : number = 0,
  ) {}
  public observable?;
}
