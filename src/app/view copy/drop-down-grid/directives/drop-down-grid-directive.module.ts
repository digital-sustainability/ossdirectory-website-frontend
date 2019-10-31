import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownGridHeaderDirective } from './drop-down-grid-header.directive';
import { DropDownGridItemsDirective } from './drop-down-grid-items.directive';



@NgModule({
  declarations: [
    DropDownGridHeaderDirective,
    DropDownGridItemsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropDownGridHeaderDirective,
    DropDownGridItemsDirective
  ],
})
export class DropDownGridDirectiveModule { }
