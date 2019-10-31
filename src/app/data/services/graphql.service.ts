import { Injectable } from '@angular/core';
import { GQLParam } from '../graphql';

@Injectable()
export class GraphqlService {

  private list : Array<GQLParam> = new Array();

  constructor() { }

  public addParam(param : GQLParam) {
    this.list.push(param)
  }

  public getParams() : Array<GQLParam> {
    return this.list;
  }

}
