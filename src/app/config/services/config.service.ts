import { Injectable } from '@angular/core';
import { Config } from '../config';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config : Config;
  private subject : BehaviorSubject<Config>

  constructor() { 
    this.setup();
  }

  public setup() {
    this.config = new Config();
    this.subject = new BehaviorSubject(this.config);
  }

  public set(attribute : string, value : any) {
    this.config[attribute] = value;
    this.subject.next(this.config);
  }

  public get(attribute : string) {
    return this.config[attribute];
  }

  public getSubject() {
    return this.subject;
  }

  public getTranslationType(type) {
    console.log(type)
    return ['Client', 'Vendor', 'Community', 'Organisation'].indexOf(type) > -1 ? 'Organisation' : type;
  }


}
