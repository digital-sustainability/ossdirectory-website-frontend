import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MatcherService } from '../route/services/matcher';
import { DetailComponent } from './detail/detail.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  /*RouterModule.forRoot(routes, )*/
  exports: [RouterModule]
})
export class ViewRoutingModule {
  constructor(
    private matcher: MatcherService
  ){
    routes.push({
      matcher : (url) => this.matcher.detectSequence(url),
      component : DetailComponent
    });

    routes.push({
      matcher: (url) => this.matcher.detectTypes(url),
      component: GridComponent
    });

  }
}
