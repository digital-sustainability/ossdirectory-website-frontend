import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vendor-successstory-relation-item',
  templateUrl: './vendor-successstory-relation-item.component.html',
  styleUrls: ['./vendor-successstory-relation-item.component.scss']
})
export class VendorSuccessstoryRelationItemComponent implements OnInit {

  @Input() successStory;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.successStory.imageUrl)[1];
    this.successStory.imageUrl = `http://minio.digisus.ch/oss-directory/successstory_${this.successStory.uid}.${ending}`;
  }

}
