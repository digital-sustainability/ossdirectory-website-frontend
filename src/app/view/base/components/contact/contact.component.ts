import { Component, OnInit } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { ConfigService } from "../../../../config/services/config.service";
import { ApolloService } from "../../../../data/services/apollo.service";
import { EditableService } from '../../../../auth/services/editable.service';

const contactQuery = (type, sequence) => gql`
  query ContactQuery {
     ${type}( sequence : "${sequence}" ) {
       url
        address {
          sequence
          address
          address2
          zip
          city
      }
      sequence

  }
  }
`;



const urlUpdateQuery = (type) => gql`
  mutation UpdateURL($sequence : String!, $url : String){
    UpdateClient( sequence : $sequence, url : $url) {
    url
    }
  }
`;


const addressUpdateQuery = (type) => gql`
  mutation UpdateAddress($sequence : String!, $address : String){
    UpdateAddress( sequence : $sequence, address : $address) {
			 address
    }
  }
`;

const address2UpdateQuery = (type) => gql`
  mutation UpdateAddress2($sequence : String!, $address2 : String){
    UpdateAddress( sequence : $sequence, address2 : $address2) {
			 address2
    }
  }
`;

const zipUpdateQuery = (type) => gql`
  mutation UpdateZip($sequence : String!, $zip : String){
    UpdateAddress( sequence : $sequence, zip : $zip) {
			 zip
    }
  }
`;

const cityUpdateQuery = (type) => gql`
  mutation UpdateCity($sequence : String!, $city : String){
    UpdateAddress( sequence : $sequence, city : $city) {
			 city
    }
  }
`;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public Editor = BalloonEditor;

  private type;
  private sequence;
  public item;
  public address;
  public canEdit;

  constructor(
    public config: ConfigService,
    public apollo: ApolloService,
    public editable: EditableService
  ) {


  }

  ngOnInit() {
    this.type = this.config.get("type");
    this.sequence = this.config.get("sequence");
    this.canEdit = this.editable.isEditable();

    const query = contactQuery(this.type, this.sequence);
    const obs = this.apollo.sendQuery(query);
    obs.subscribe(res => {
      this.item = res.data[this.type][0];
      console.log(this.item);
      this.address = this.item.address;
      console.log(this.address);
    });


  }

  updateUrl() {
    this.apollo.sendUpdateQuery(urlUpdateQuery(this.type), { sequence: this.item.sequence, url: this.item.url }).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }


  updateAddress() {
    this.apollo.sendUpdateQuery(addressUpdateQuery(this.type), { sequence: this.address.sequence, address: this.address.address }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }


  updateAddress2() {
    this.apollo.sendUpdateQuery(address2UpdateQuery(this.type), { sequence: this.address.sequence, address2: this.address.address2 }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }



  updateZip() {
    this.apollo.sendUpdateQuery(zipUpdateQuery(this.type), { sequence: this.address.sequence, zip: this.address.zip }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }


  updateCity() {
    this.apollo.sendUpdateQuery(cityUpdateQuery(this.type), { sequence: this.address.sequence, city: this.address.city }).subscribe(({ data }) => {
      console.log(data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
}







