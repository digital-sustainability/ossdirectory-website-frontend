import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTopDirective } from './grid-top.directive';
import { GridBotDirective } from './grid-bot.directive';
import { GridLeftDirective } from './grid-left.directive';
import { GridRightDirective } from './grid-right.directive';
import { GridMidDirective } from './grid-mid.directive';

@NgModule({
  declarations: [
    GridTopDirective,
    GridBotDirective,
    GridLeftDirective,
    GridRightDirective,
    GridMidDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GridTopDirective,
    GridBotDirective,
    GridLeftDirective,
    GridRightDirective,
    GridMidDirective
  ],
})
export class GridDirectiveModule { }
