import { Injectable } from '@angular/core';
import { Config } from '../config';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LanguageService } from '../../data/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config: Config;
  private subject: BehaviorSubject<Config>;
  private _langSub: Subscription;

  constructor(
    private langService: LanguageService,
  ) {
    this.setup();
  }

  public setup() {
    this.config = new Config();
    this.subject = new BehaviorSubject(this.config);
    this._langSub = this.langService.currentLang.subscribe(
      lang => {
        this.config.language = lang;
      });
  }

  public set(attribute: string, value: any) {
    this.config[attribute] = value;
    this.subject.next(this.config);
  }

  public get(attribute: string) {
    return this.config[attribute];
  }

  public getSubject() {
    return this.subject;
  }

}
