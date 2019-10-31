import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageComponent} from './components/image/image.component';
import {TitleComponent} from './components/title/title.component';
import {ContactComponent} from './components/contact/contact.component';
import {StatsComponent} from './components/stats/stats.component';
import {BadgeComponent} from './components/badge/badge.component';
import {ClaimComponent} from './components/claim/claim.component';
import {DescriptionComponent} from './components/description/description.component';
import {GridItemComponent} from './components/grid-item/grid-item.component';
import {RouterModule} from '@angular/router';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {FormsModule} from "@angular/forms";
import {ImageUploaderComponent} from "./components/image-uploader/image-uploader.component";
import {FileUploadModule} from "ng2-file-upload";
import {MaterialDesignModule} from "../../../shared/material-design/material-design.module";
import {NgxFileDropModule} from 'ngx-file-drop';
import {SearchComponent} from './components/search/search.component';
import {AddRelationshipComponent} from './components/add-relationship/add-relationship.component';

@NgModule({
  declarations: [
    ImageComponent,
    TitleComponent,
    ContactComponent,
    StatsComponent,
    BadgeComponent,
    ClaimComponent,
    DescriptionComponent,
    GridItemComponent,
    ImageUploaderComponent,
    SearchComponent,
    AddRelationshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CKEditorModule,
    FormsModule,
    FileUploadModule,
    MaterialDesignModule,
    NgxFileDropModule
  ],
  exports: [
    ImageComponent,
    TitleComponent,
    ContactComponent,
    StatsComponent,
    BadgeComponent,
    ClaimComponent,
    DescriptionComponent,
    GridItemComponent,
    ImageUploaderComponent,
    SearchComponent,
    AddRelationshipComponent
  ],
})
export class BaseModule {
}
