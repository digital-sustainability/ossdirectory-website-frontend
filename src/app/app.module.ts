import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialDesignModule } from './material-design/material-design.module';
import { HomeComponent } from './view/home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './view/navbar/navbar.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpService } from './http/http.service';
import { FooterComponent } from './view/footer/footer.component';
import { DataModule } from './data/data.module';
import { RouteModule } from './route/route.module';
import { AuthModule } from './auth/auth.module';
import { NavbarItemComponent } from './view/navbar/navbar-item/navbar-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraphQLModule } from './graphql/graphql.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NavbarItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    DataModule,
    RouteModule,
    AuthModule,
    FlexLayoutModule,
    GraphQLModule,
    ViewModule
  ],
  exports: [
    MaterialDesignModule,
    CKEditorModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
