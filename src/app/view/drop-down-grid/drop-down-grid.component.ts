import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-grid',
  templateUrl: './drop-down-grid.component.html',
  styleUrls: ['./drop-down-grid.component.scss']
})
export class DropDownGridComponent implements OnInit {

  expansionPanelOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleExpansionPanel() {
    this.expansionPanelOpen = !this.expansionPanelOpen;
  }

}
