import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNwDirective } from './detail-nw.directive';
import { DetailSwDirective } from './detail-sw.directive';
import { DetailSeDirective } from './detail-se.directive';
import { DetailNeDirective } from './detail-ne.directive';
import { DetailNeTopDirective } from './detail-ne-top.directive';
import { DetailNeMidDirective } from './detail-ne-mid.directive';
import { DetailNeBotDirective } from './detail-ne-bot.directive';

@NgModule({
  declarations: [
    DetailNwDirective,
    DetailSwDirective,
    DetailSeDirective,
    DetailNeDirective,
    DetailNeTopDirective,
    DetailNeMidDirective,
    DetailNeBotDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DetailNwDirective,
    DetailSwDirective,
    DetailSeDirective,
    DetailNeDirective,
    DetailNeTopDirective,
    DetailNeMidDirective,
    DetailNeBotDirective],
})
export class DetailDirectiveModule { }
