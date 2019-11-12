import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import { RssFeedService } from '../../../../data/services/rss-feed.service';

@Component({
  selector: 'app-news-feed-grid',
  templateUrl: './news-feed-grid.component.html',
  styleUrls: ['./news-feed-grid.component.scss']
})
export class NewsFeedGridComponent implements OnInit {

  public newsfeed;

  constructor(
    private http: HttpClient,
    private rssFeed: RssFeedService
  ) { }

  ngOnInit() {
    this.rssFeed.getRssFeed().subscribe(feed => {
      this.newsfeed = feed;
    });
  }

}
