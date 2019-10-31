import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vendor-product-relation-item',
  templateUrl: './vendor-product-relation-item.component.html',
  styleUrls: ['./vendor-product-relation-item.component.scss']
})
export class VendorProductRelationItemComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.product.imageUrl)[1];
    this.product.imageUrl = `http://minio.digisus.ch/oss-directory/product_${this.product.sequence}.${ending}`
  }

}
