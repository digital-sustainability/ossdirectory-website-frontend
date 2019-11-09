import { Component, OnInit } from '@angular/core';
import { ApolloService } from "../../../data/services/apollo.service";
import gql from "graphql-tag";
import { AuthService } from "../../../auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public email;
    public password;

  constructor(
      private auth: AuthService,

  ) { }

  ngOnInit() {
  }

    public login(): void {
        this.auth.login(this.email, this.password);
    }
}
