import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-vendor-relation-item',
  templateUrl: './product-vendor-relation-item.component.html',
  styleUrls: ['./product-vendor-relation-item.component.scss']
})
export class ProductVendorRelationItemComponent implements OnInit {

  @Input() vendor;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.vendor.logo)[1];
    this.vendor.imageUrl = `http://minio.digisus.ch/oss-directory/vendor_${this.vendor.uid}.${ending}`;
  }

}
