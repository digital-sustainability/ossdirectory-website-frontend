import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-successstory-relation-item',
  templateUrl: './client-successstory-relation-item.component.html',
  styleUrls: ['./client-successstory-relation-item.component.scss']
})
export class ClientSuccessstoryRelationItemComponent implements OnInit {

  @Input() successStory;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.successStory.logo)[1];
    this.successStory.imageUrl = `http://minio.digisus.ch/oss-directory/successstory_${this.successStory.uid}.${ending}`;
  }

}
