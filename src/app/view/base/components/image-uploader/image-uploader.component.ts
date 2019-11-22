import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import gql from 'graphql-tag';
import { ApolloService } from '../../../../data/services/apollo.service';
import { ConfigService } from '../../../../config/services/config.service';
import { FileService } from "../../../../data/services/file.service";

const updateImageUrl = (type) => gql`
mutation updateImage($sequence: String!, $imageUrl: String) {
  Update${type}(sequence: $sequence, imageUrl: $imageUrl) {
    sequence
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
    private config : ConfigService,
    private file: FileService,
  ) { }

  ngOnInit() {
    this.config.getSubject().subscribe(
      ({type, sequence}) => {
        this.type = type;
        this.sequence = sequence;
      }
    );
  }

  public handleFileInput(files: FileList) {
    const file = files.item(0);
    if (file) {
      const fileExtension = file.name.split('.').pop();
      const sequence = this.config.get('sequence');
      const type = this.config.get('type');
      const imageUrl = `${type.toLowerCase()}_${sequence}.${fileExtension}`;
      // if user could update image then send image to minio
      this.apollo.mutateObservable(updateImageUrl(type), { sequence, imageUrl }).subscribe((res) => {
        if (!res.error) {
          this.file.uploadFile(file).subscribe(() => console.log("uploaded file"));
        }
      });
    }

  }

//   public dropped(files: NgxFileDropEntry[]) {
//     if (files.length > 1) {
//       console.log("only one file is allowed");
//     }

//     const file = files[0];

//     if (file.fileEntry.isDirectory) {
//       console.log("not a file");
//     }

//     if (file.fileEntry.isFile) {

//       const fileEntry = file.fileEntry as FileSystemFileEntry;
//       fileEntry.file((stream: File) => {
//         const re = /(?:\.([^.]+))?$/;
//         const ending = re.exec(stream.name)[1];
//         this.apollo.uploadImage(uploadFile, {
//           file : stream,
//           filename : `${this.type}_${this.sequence}.${ending}`
//         }).subscribe();
//     });
//   }}
}
