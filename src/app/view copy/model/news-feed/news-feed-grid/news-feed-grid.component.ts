import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-news-feed-grid',
  templateUrl: './news-feed-grid.component.html',
  styleUrls: ['./news-feed-grid.component.scss']
})
export class NewsFeedGridComponent implements OnInit {

  public newsfeed;

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {
    this.http.get(environment.apiURL + 'api/get-rss-feed').subscribe(feed => {
      this.newsfeed = feed;
      console.log(feed)
    })
  }

}
