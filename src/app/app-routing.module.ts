import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {state: 'home'}
      },

  /*
  OSS Implementation
  */

  {
    path: '',
    loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
