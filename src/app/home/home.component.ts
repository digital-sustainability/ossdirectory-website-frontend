import { Component, OnInit, Host } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import { FileService } from '../data/services/file.service';
import { RouteService } from '../route/services/route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
  ]
})
export class HomeComponent implements OnInit {

  public Editor = BalloonEditor;
  
  constructor(
    private file : FileService,
    @Host() private route : RouteService,
  ) { }


  ngOnInit() {}
}
