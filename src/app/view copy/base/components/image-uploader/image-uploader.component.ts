import { Component, OnInit } from '@angular/core';
import {CsrfService} from '../../../../../shared/auth/csrf.service';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import gql from 'graphql-tag';
import { ApolloService } from '../../../../data/services/apollo.service';
import { ConfigService } from 'src/app/modules/config/services/config.service';

const uploadFile = gql`
mutation singleUpload($file : Upload!, $filename : String!) {
  singleUpload(file : $file, filename : $filename) {
    filename
  }
}
`;

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  public type : string;
  public sequence : string;

  constructor(
    private apollo: ApolloService,
    private config : ConfigService
  ) { }

  ngOnInit() {
    this.config.getSubject().subscribe(
      ({type, sequence}) => {
        this.type = type;
        this.sequence = sequence;
      }
    );
  }

  public dropped(files: NgxFileDropEntry[]) {
    if (files.length > 1) {
      console.log("only one file is allowed");
    }

    const file = files[0];

    if (file.fileEntry.isDirectory) {
      console.log("not a file");
    }

    if (file.fileEntry.isFile) {

      const fileEntry = file.fileEntry as FileSystemFileEntry;
      fileEntry.file((stream: File) => {
        const re = /(?:\.([^.]+))?$/;
        const ending = re.exec(stream.name)[1];
        this.apollo.uploadImage(uploadFile, {
          file : stream,
          filename : `${this.type}_${this.sequence}.${ending}`
        }).subscribe();
    });
  }}
}
