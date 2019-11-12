import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDetailComponent } from './model/vendor/vendor-detail/vendor-detail.component';
import { VendorGridComponent } from './model/vendor/vendor-grid/vendor-grid.component';
import { ClientGridComponent } from './model/client/client-grid/client-grid.component';
import { ClientDetailComponent } from './model/client/client-detail/client-detail.component';
import { CommunityGridComponent } from './model/community/community-grid/community-grid.component';
import { ProductDetailComponent } from './model/product/product-detail/product-detail.component';
import { ProductGridComponent } from './model/product/product-grid/product-grid.component';
import { SuccessStoryGridComponent } from './model/success-story/success-story-grid/success-story-grid.component';
import { SuccessStoryDetailComponent } from './model/success-story/success-story-detail/success-story-detail.component';
import { JobDetailComponent } from './model/job/job-detail/job-detail.component';
import { JobGridComponent } from './model/job/job-grid/job-grid.component';
import { RssDetailComponent } from './model/rss/rss-detail/rss-detail.component';
import { RssGridComponent } from './model/rss/rss-grid/rss-grid.component';
import { EventGridComponent } from './model/event/event-grid/event-grid.component';
import { EventDetailComponent } from './model/event/event-detail/event-detail.component';
import { NewsDetailComponent } from './model/news/news-detail/news-detail.component';
import { NewsGridComponent } from './model/news/news-grid/news-grid.component';
import { NewsFeedDetailComponent } from './model/news-feed/news-feed-detail/news-feed-detail.component';
import { NewsFeedGridComponent } from './model/news-feed/news-feed-grid/news-feed-grid.component';
import { CommunityDetailComponent } from './model/community/community-detail/community-detail.component';
import { RouteModule } from '../route/route.module';
import { ViewRoutingModule } from './view-routing.module';
import { BaseModule } from './base/base.module';
import { GridComponent } from './grid/grid.component';
import { DetailComponent } from './detail/detail.component';
import { DefaultGridComponent } from './model/default/default-grid/default-grid.component';
import { DefaultDetailComponent } from './model/default/default-detail/default-detail.component';
import { DetailDirectiveModule } from './detail/directives/detail-directive.module';
import { DetailLayoutComponent } from './detail/detail-layout.component';
import { GridLayoutComponent } from './grid/grid-layout.component';
import { GridDirectiveModule } from './grid/directives/grid-directive.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MaterialDesignModule} from '../material-design/material-design.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { DropDownGridComponent } from './drop-down-grid/drop-down-grid.component';
import { DropDownGridLayoutComponent } from './drop-down-grid/drop-down-grid-layout.component';
import { DropDownGridHeaderDirective } from './drop-down-grid/directives/drop-down-grid-header.directive';
import { DropDownGridItemsDirective } from './drop-down-grid/directives/drop-down-grid-items.directive';
import { DropDownGridDirectiveModule } from './drop-down-grid/directives/drop-down-grid-directive.module';
import { VendorProductRelationItemComponent } from './model/vendor/vendor-product-relation-item/vendor-product-relation-item.component';
import { SuccessStoryProductRelationItemComponent } from './model/success-story/success-story-product-relation-item/success-story-product-relation-item.component';
import { SuccessStoryVendorRelationItemComponent } from './model/success-story/success-story-vendor-relation-item/success-story-vendor-relation-item.component';
import { SuccessStoryClientRelationItemComponent } from './model/success-story/success-story-client-relation-item/success-story-client-relation-item.component';
import {FormsModule} from "@angular/forms";
import { VendorSuccessstoryRelationItemComponent } from './model/vendor/vendor-successstory-relation-item/vendor-successstory-relation-item.component';
import { VendorProductRelationCreateItemComponent } from './model/vendor/vendor-product-relation-create-item/vendor-product-relation-create-item.component';
import { VendorSuccessstoryRelationCreateItemComponent } from './model/vendor/vendor-successstory-relation-create-item/vendor-successstory-relation-create-item.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { SnackbarComponent } from './notification/snackbar/snackbar.component';
import { ClientSuccessstoryRelationCreateItemComponent } from './model/client/client-successstory-relation-create-item/client-successstory-relation-create-item.component';
import { ClientSuccessstoryRelationItemComponent } from './model/client/client-successstory-relation-item/client-successstory-relation-item.component';
import { SuccessstoryClientRelationItemComponent } from './model/success-story/successstory-client-relation-item/successstory-client-relation-item.component';
import { SuccessstoryVendorRelationItemComponent } from './model/success-story/successstory-vendor-relation-item/successstory-vendor-relation-item.component';
import { SuccessstoryVendorRelationCreateItemComponent } from './model/success-story/successstory-vendor-relation-create-item/successstory-vendor-relation-create-item.component';
import { SuccessstoryClientRelationCreateItemComponent } from './model/success-story/successstory-client-relation-create-item/successstory-client-relation-create-item.component';
import { SuccessstoryProductRelationItemComponent } from './model/success-story/successstory-product-relation-item/successstory-product-relation-item.component';
import { SuccessstoryProductRelationCreateItemComponent } from './model/success-story/successstory-product-relation-create-item/successstory-product-relation-create-item.component';
import { ProductVendorRelationItemComponent } from './model/product/product-vendor-relation-item/product-vendor-relation-item.component';
import { ProductVendorRelationCreateItemComponent } from './model/product/product-vendor-relation-create-item/product-vendor-relation-create-item.component';
import { ProductSuccessstoryRelationCreateItemComponent } from './model/product/product-successstory-relation-create-item/product-successstory-relation-create-item.component';
import { ProductSuccessstoryRelationItemComponent } from './model/product/product-successstory-relation-item/product-successstory-relation-item.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    GridComponent,
    DetailComponent,
    VendorDetailComponent,
    VendorGridComponent,
    ClientGridComponent,
    ClientDetailComponent,
    CommunityGridComponent,
    ProductDetailComponent,
    ProductGridComponent,
    SuccessStoryGridComponent,
    SuccessStoryDetailComponent,
    JobDetailComponent,
    JobGridComponent,
    RssDetailComponent,
    RssGridComponent,
    EventGridComponent,
    EventDetailComponent,
    NewsDetailComponent,
    NewsGridComponent,
    NewsFeedDetailComponent,
    NewsFeedGridComponent,
    CommunityDetailComponent,
    DefaultGridComponent,
    DefaultDetailComponent,
    DetailLayoutComponent,
    GridLayoutComponent,
    DropDownGridComponent,
    DropDownGridLayoutComponent,
    VendorProductRelationItemComponent,
    SuccessStoryProductRelationItemComponent,
    SuccessStoryVendorRelationItemComponent,
    SuccessStoryClientRelationItemComponent,
    VendorSuccessstoryRelationItemComponent,
    VendorProductRelationCreateItemComponent,
    VendorSuccessstoryRelationCreateItemComponent,
    LoginComponent,
    RegistrationComponent,
    SnackbarComponent,
    ClientSuccessstoryRelationCreateItemComponent,
    ClientSuccessstoryRelationItemComponent,
    SuccessstoryClientRelationItemComponent,
    SuccessstoryVendorRelationItemComponent,
    SuccessstoryVendorRelationCreateItemComponent,
    SuccessstoryClientRelationCreateItemComponent,
    SuccessstoryProductRelationItemComponent,
    SuccessstoryProductRelationCreateItemComponent,
    ProductVendorRelationItemComponent,
    ProductVendorRelationCreateItemComponent,
    ProductSuccessstoryRelationCreateItemComponent,
    ProductSuccessstoryRelationItemComponent,
    CreateNewComponent

  ],
  imports: [
    CommonModule,
    RouteModule,
    ViewRoutingModule,
    BaseModule,
    DetailDirectiveModule,
    GridDirectiveModule,
    DropDownGridDirectiveModule,
    RouterModule,
    FlexLayoutModule,
    MaterialDesignModule,
    NgxFileDropModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    RouterModule,
    NgxFileDropModule,
  ],
  entryComponents: [
    GridComponent,
    DetailComponent,
    VendorProductRelationCreateItemComponent,
    VendorSuccessstoryRelationCreateItemComponent,
    ClientSuccessstoryRelationCreateItemComponent,
    ProductSuccessstoryRelationCreateItemComponent,
    ProductVendorRelationCreateItemComponent,
    SuccessstoryClientRelationCreateItemComponent,
    SuccessstoryProductRelationCreateItemComponent,
    SuccessstoryVendorRelationCreateItemComponent
  ]
})
export class ViewModule {}
