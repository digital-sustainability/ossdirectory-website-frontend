import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApolloService } from "../../../data/services/apollo.service";
import gql from "graphql-tag";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    public email: string;
    public password: string;
    public confirm: string;

  constructor(
      private router: Router,
      private apollo: ApolloService
  ) { }

  ngOnInit() {
  }

  public register() {
  
  }

}
