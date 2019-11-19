import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RssFeedService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getRssFeed() {
    return this.http.get(environment.apiURL + 'rss-feed');
  }
}
