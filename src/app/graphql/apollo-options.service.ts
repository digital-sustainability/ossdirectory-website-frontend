import { Injectable } from '@angular/core';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-angular-link-http";
import { environment } from "../../environments/environment";
import { OnErrorService } from "./on-error.service";
import { ApolloLink } from "apollo-link";


const uri = environment.graphqlURL;
const ws_uri = environment.graphqlWSURL;

@Injectable({
  providedIn: 'root'
})
export class ApolloOptionsService {

  constructor(
      private httpLink: HttpLink,
      private onErrorService: OnErrorService,
  ) { }

  public websocket() {
     // const wss = new WebSocketLink({
    //     uri: ws_uri,
    //     options: {
    //         reconnect: true,
    //     }
    // });
  }

  public authHeader() {
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
  }

  public split() {
     // link: split(
    //     ({ query }) => {
    //         const definition = getMainDefinition(query);
    //         return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    //     },
    //     wss,
    //     // authLink.concat(https),
    //     https,
    // ),
  }

  private link() {

    const link = this.httpLink.create({uri});
    return link;
  }

  private cache() {

    const cache = new InMemoryCache({
        dataIdFromObject: (o: any) => o.sequence // make sequence the new identifier
    });

    return cache;
  }

  private headers() {

    const headers = { // add headers such that we can access our backend with cors policy
        'Access-Control-Allow-Origin': uri,
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'application/json',
    };

    return headers;
  }



  public createOptions() {

    let link: ApolloLink = this.link();
    const onError = this.onErrorService.unauthorizedRetry();
    link = link.concat(onError);

    const cache = this.cache();
    const headers = this.headers();

    return {
        link,
        cache,
        headers,
    };
  }
}
