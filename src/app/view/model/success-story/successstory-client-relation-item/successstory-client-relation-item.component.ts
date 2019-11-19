import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-successstory-client-relation-item',
  templateUrl: './successstory-client-relation-item.component.html',
  styleUrls: ['./successstory-client-relation-item.component.scss']
})
export class SuccessstoryClientRelationItemComponent implements OnInit {

  @Input() client;

  constructor() { }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    const ending = re.exec(this.client.logo)[1];
    this.client.imageUrl = `http://minio.digisus.ch/oss-directory/client_${this.client.uid}.${ending}`;
  }

}
