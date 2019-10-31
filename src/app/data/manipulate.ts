import { Data } from './data';

export abstract class Manipulate {

    constructor() {
    }

    //TODO: deep copy objects not just reference it
    public connect(obj : Data, to){
      let array = this[to];
      if (array instanceof Array) {
        array.unshift(obj);
      } else {
        this[to] = obj;
      }
    }
    
    public disconnect(obj, from){
      let array = this[from];
      if (array instanceof Array) {
        let index = array.indexOf(obj);
        array.splice(index, 1);
      } else {
        //TODO: exception
      }
    }
}

