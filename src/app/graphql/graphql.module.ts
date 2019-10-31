import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { environment } from '../../environments/environment';
import { HttpBatchLink } from 'apollo-angular-link-http-batch';
import { split, ApolloLink } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';


const uri = environment.graphqlURL;
const ws_uri = environment.graphqlWSURL;

export function createApollo(httpLink: HttpBatchLink) {

    // const wss = new WebSocketLink({
    //     uri: ws_uri,
    //     options: {
    //         reconnect: true,
    //     }
    // });
    const https = httpLink.create({
        uri,
    });

    // const authLink = setContext((operation, previousContext) => {
    //     const { headers } = previousContext;
    //     return {
    //         ...previousContext,
    //         headers: {
    //             ...headers,
    //             'Authorization': `${token}`,
    //         }
    //     };
    // });

  return {
    // link: split(
    //     ({ query }) => {
    //         const definition = getMainDefinition(query);
    //         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    //     },
    //     wss,
    //     // authLink.concat(https),
    //     https,
    // ),
    link: https,
    cache: new InMemoryCache({
        dataIdFromObject: (o: any) => o.sequence // make sequence the new identifier
    }),
    headers: { // add headers such that we can access our backend with cors policy
        'Access-Control-Allow-Origin': uri,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'application/json',
    }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
