import { RouteModule } from '../route.module';
import { Injectable } from '@angular/core';
import { UrlSegment, UrlMatchResult } from '@angular/router';
import { Modeltype } from '../../data/enums/modeltype.enum';
import { ConfigService } from '../../config/services/config.service';

@Injectable({ providedIn : RouteModule })
export class MatcherService {

  constructor(
    private config : ConfigService
  ) {}

  public detectTypes(segments : UrlSegment[]) : UrlMatchResult {
    let currentSegment;
    let type;
    for (let segment of segments) {
      let path = segment.path.toLowerCase();

      for (let model in Modeltype){
        if (model.toLowerCase() === path){
          type = model;
          currentSegment = segment
          break;
        }
      }
    }
    if (type) {
      this.config.set("type", type);
      return { consumed : segments, posParams : { type : currentSegment } };
    }
    return null;
  }

  public detectSequence(segments : UrlSegment[]) : UrlMatchResult {
    let sequence : UrlSegment;
    for (let segment of segments){
      if (!isNaN(+segment.path)) {
        sequence = segment;
        break;
      }
    }
    if (sequence) {
      this.config.set("sequence", sequence.path);
      return { consumed : segments, posParams : { sequence : sequence } };
    }
    return null;
    
  }

}
