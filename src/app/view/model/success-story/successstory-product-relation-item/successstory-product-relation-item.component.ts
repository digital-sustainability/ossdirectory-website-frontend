import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-successstory-product-relation-item',
  templateUrl: './successstory-product-relation-item.component.html',
  styleUrls: ['./successstory-product-relation-item.component.scss']
})
export class SuccessstoryProductRelationItemComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.product.imageUrl)[1];
    this.product.imageUrl = `http://minio.digisus.ch/oss-directory/product_${this.product.uid}.${ending}`;
  }

}
