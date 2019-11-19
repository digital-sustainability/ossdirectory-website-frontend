import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ApolloService } from "../../../data/services/apollo.service";
import gql from "graphql-tag";
import { AuthService } from '../../../auth/auth.service';



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
      private apollo: ApolloService,
      private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public register() {
    this.auth.register(this.email, this.password);
  }

}
