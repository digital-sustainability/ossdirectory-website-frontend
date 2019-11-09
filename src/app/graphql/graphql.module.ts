import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloOptionsService } from "./apollo-options.service";

export function options(optionsService: ApolloOptionsService) {
    return optionsService.createOptions();
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: options,
      deps: [ApolloOptionsService],
    },
  ],
})
export class GraphQLModule {}
