import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-successstory-vendor-relation-item',
  templateUrl: './successstory-vendor-relation-item.component.html',
  styleUrls: ['./successstory-vendor-relation-item.component.scss']
})
export class SuccessstoryVendorRelationItemComponent implements OnInit {

  @Input() vendor;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.vendor.logo)[1];
    this.vendor.imageUrl = `http://minio.digisus.ch/oss-directory/vendor_${this.vendor.uid}.${ending}`;
  }
}
