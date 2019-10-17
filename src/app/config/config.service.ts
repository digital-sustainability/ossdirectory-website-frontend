import { Injectable } from '@angular/core';
import { Config } from './config';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    public config: Config = new Config();

    public subject: Subject<Config>;

    constructor() {
        this.subject = new Subject();
    }

    public set(name: string, value: any) {
        this.config[name] = value;
        this.subject.next(this.config);
    }

    public get(name: string): any {
        return this.config[name];
    }

    public subscribe(subscribeFn?: (config: Config) => {}): Subscription {
        return this.subject.subscribe(subscribeFn);
    }
}
