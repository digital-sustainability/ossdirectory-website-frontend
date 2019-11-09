import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/auth/login/login.component';
import { RegistrationComponent } from './view/auth/registration/registration.component';
import { CreateNewComponent } from './view/create-new/create-new.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { state: 'home' },
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegistrationComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: CreateNewComponent,
    pathMatch: 'full',
  },

  /*
  OSS Implementation
  */

  {
    path: '',
    loadChildren: () => import('./view/view.module').then(m => m.ViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
