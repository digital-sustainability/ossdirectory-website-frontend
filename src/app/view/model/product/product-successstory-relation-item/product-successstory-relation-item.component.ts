import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-successstory-relation-item',
  templateUrl: './product-successstory-relation-item.component.html',
  styleUrls: ['./product-successstory-relation-item.component.scss']
})
export class ProductSuccessstoryRelationItemComponent implements OnInit {

  @Input() successStory;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.successStory.imageUrl)[1];
    this.successStory.imageUrl = `http://minio.digisus.ch/oss-directory/successstory_${this.successStory.uid}.${ending}`;
  }

}
