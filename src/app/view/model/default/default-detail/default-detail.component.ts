import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-default-detail',
  templateUrl: './default-detail.component.html',
  styleUrls: ['./default-detail.component.scss'],
})
export class DefaultDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onTest($event) {
    console.log("test in detail")
  }

}
