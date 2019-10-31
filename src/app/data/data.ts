import { Factory } from './factory';
import { Manipulate } from './manipulate';
import { Property } from './enums/null';
import { Connector } from './connector';
import { Req } from './req';
import { Pager } from './pager';

export abstract class Data extends Manipulate {

    public modeltype;
    public sequence : string | Property = Property.NULL;

    constructor(public factory : Factory){ 
        super() 
    }

    public getName() : string { return this.constructor.name; }

    public deserialize(){
      this._deserialize();
    }

    protected abstract _deserialize();

    public create() : Pager {
      return this.factory.req.request(new Req("create", this, this.getName()))
    }

    public read() : Pager {
      return this.factory.req.request(new Req("read",this, this.getName()))
    }

    public update() : Pager {
      return this.factory.req.request(new Req("update", this, this.getName()))
    }
    public delete() : Pager {
      return this.factory.req.request(new Req("delete", this, this.getName()))
    }
    public add(child : Data, key : string, connector? : Connector) : Pager {
      let isArray = Array.isArray(this[key]);
      if (connector){
        connector[child.getName()] = child;
        if (isArray) this[key].push(connector)
        else this[key] = connector;
        
      } else {
        if (isArray) this[key].push(child);
        else this[key] = child;
      }
      return this._add(child, key, connector);
    }

    protected _add(child : Data, key : string, connector? : Connector){
      let req = new Req("add", this, this.getName(), child, key, connector, child.getName())
      return this.factory.req.request(req);
    }

    public remove(child : Data, key : string, connector? : Connector) : Pager {
      let req = new Req("remove", this, this.getName(), child, key);
      let isArray = Array.isArray(this[key]);
      if (connector){
        connector[child.getName()] = child;
        if (isArray) {
          let index = this[key].findIndex(function(element){
            return element[child.getName()] === child;  
          })
          this[key].splice(index, 1);
        }
        else this[key] = Property.NULL;
        
      } else {
        if (isArray) {
          let index = this[key].indexOf(child);
          this[key].splice(index, 1);
        }
        else this[key] = Property.NULL;

      }
      return this.factory.req.request(req);
    }
}
