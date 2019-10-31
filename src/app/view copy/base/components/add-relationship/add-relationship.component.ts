import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material";
import {VendorProductRelationCreateItemComponent} from "../../../model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component";
import {ComponentType} from "@angular/cdk/typings/portal";

@Component({
  selector: 'app-add-relationship',
  templateUrl: './add-relationship.component.html',
  styleUrls: ['./add-relationship.component.scss']
})
export class AddRelationshipComponent implements OnInit {

  @Output() onAccept : EventEmitter<any> = new EventEmitter<any>();
  @Input() component : ComponentType<any>;

  public item;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.component);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        console.log(result)
        this.onAccept.emit(result);
      }
    });
  }

}
