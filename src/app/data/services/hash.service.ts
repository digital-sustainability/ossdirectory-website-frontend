import { Injectable } from '@angular/core';
import { DataModule } from '../data.module';
import { Property } from '../enums/null';


@Injectable({ providedIn : DataModule })
export class HashService {


  public getHash(obj) {
    let copy = this.ignoreObjects(obj);
    return JSON.stringify(copy);
  }

  public ignoreObjects(obj) {
    let copy = Object.assign({}, obj);
    for (let prop in copy) {
      if (typeof(copy[prop]) === "object" || copy[prop] === Property.NULL){
        delete copy[prop]
      }
    }
    delete copy.hash //ignore hash as well
    return copy;

  }
}
