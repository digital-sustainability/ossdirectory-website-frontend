import { Component, OnInit } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { ConfigService } from "../../../../config/services/config.service";
import { ApolloService } from "../../../../data/services/apollo.service";

const statsQuery = (type, sequence) => gql`
  query StatsQuery {
     ${type}( sequence : "${sequence}" ) {
       sequence
       created_at{
        year
        month
        day
      }
      updated_at {
        year
        month
        day
      }

  }
  }
`;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {

  public Editor = BalloonEditor;

  private type;
  private sequence;
  public createdAt;
  public updatedAt;
  public formattedDate;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
  ) {


  }

  ngOnInit() {
    this.type = this.config.get("type");
    this.sequence = this.config.get("sequence");

    const query = statsQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.createdAt = res.data[this.type][0].created_at;
      console.log(this.createdAt);
      this.updatedAt = res.data[this.type][0].updated_at;
      console.log(this.updatedAt);

      //format date
      if (this.updatedAt.year == null){
        if (this.createdAt.year == null){
            this.formattedDate = null;
        } else {
          this.formattedDate = this.formatDigit(this.createdAt.day)+'.'+this.formatDigit(this.createdAt.month)+'.'+this.createdAt.year;
      }} else {
          this.formattedDate = this.formatDigit(this.updatedAt.day)+'.'+this.formatDigit(this.updatedAt.month)+'.'+this.updatedAt.year;
        }
    });


  }

  //add a zero before single length digits
  formatDigit(digit) {
    digit = String(digit);
    if (digit.length === 1) {
      return '0' + digit;
    }
    else{
      return digit;
    }
  }


}







