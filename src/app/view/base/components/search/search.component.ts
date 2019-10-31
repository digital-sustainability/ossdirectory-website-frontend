import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import gql from "graphql-tag";
import {Modeltype} from "../../../../data/enums/modeltype.enum";
import {ConfigService} from "../../../../config/services/config.service";
import {ApolloService} from "../../../../data/services/apollo.service";

const listQuery = (type : string) => gql`
query listQuery($searchString : String){
  list : ${type}(first : 50){
    sequence
    imageUrl
    translations( filter : {title_not : "", title_contains : $searchString}) {
      title
    }
  }
}
`;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() search : EventEmitter<any> = new EventEmitter<any>();

  public items : any[] = [];
  public type;
  public searchString : string = "";

  constructor(
    private config : ConfigService,
    private apollo : ApolloService,
  ) {
  }

  ngOnInit() {
    const re = /(?:\.([^.]+))?$/;
    this.type = this.config.get("type");
    this.apollo.sendQuery(listQuery(this.type), {searchString: this.searchString}).subscribe(
      (result) => {
        console.log(result);
        this.items = result.data.list.filter(r => r.translations.length > 0);
        this.items.map((value) => {

          const ending = re.exec(value.imageUrl)[1];
          if (this.type === Modeltype.SuccessStory) this.type = "success_story";
          value.imageUrl = `http://minio.digisus.ch/oss-directory/${this.type.toLowerCase()}_${value.sequence}.${ending}`

        })
      }
    )
  }

  updateGrid() {
    const re = /(?:\.([^.]+))?$/;
    this.apollo.sendQuery(listQuery(this.type), {searchString: this.searchString}).subscribe(
      (result) => {
        this.items = result.data.list.filter(r => r.translations.length > 0);
        this.items.map((value) => {

          const ending = re.exec(value.imageUrl)[1];
          if (this.type === Modeltype.SuccessStory) this.type = "success_story";
          value.imageUrl = `http://minio.digisus.ch/oss-directory/${this.type.toLowerCase()}_${value.sequence}.${ending}`

        })
      }
    )
  }

  onSearch() {
    this.search.emit(this.searchString);
  }

}
