import { Injectable } from '@angular/core';
import { ApolloService } from "../data/services/apollo.service";
import gql from "graphql-tag";
import { Router } from "@angular/router";
import { EditableService } from './services/editable.service';

const loginQuery = gql`
    query login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            email
        }
    }
`;


const registerQuery = gql`
    mutation userRegistration($email: String!, $password: String!) {
        CreateUser(email: $email, password: $password) {
            email
        }
    }
`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public redirectUrl: string;

  constructor(
      private apollo: ApolloService,
      private router: Router,
      private editable: EditableService
  ) { }

  public login(email: string, password: string) {
    this.apollo.queryObservable(
        loginQuery,
        { email, password })
        .subscribe((res) => {
           this.editable.authenticateUser();
           this.router.navigate([this.redirectUrl || '/']);
           this.redirectUrl = null;
        });
  }

  public register(email: string, password: string) {
    this.apollo.mutateObservable(
        registerQuery,
        { email, password })
        .subscribe((res) => {
            this.router.navigate(['/login']);
        });
  }


}
