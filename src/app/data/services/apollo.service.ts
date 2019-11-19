import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { map, concatMap, switchMap, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { ConfigService } from '../../config/services/config.service';
import { GQLParam } from '../graphql';

const Query = (sequence) => gql`
    query Entry {
      Entry : findBySequence(sequence : "${sequence}")
   }
  `;

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(
    private apollo: Apollo,
    private config: ConfigService
  ) { }

  public sendQuery(query: any, variables: any = {}): Observable<ApolloQueryResult<any>> {
    const queryRef = this.watchQueryRef(query, variables);
    return queryRef.valueChanges;
  }


  /**
   * A QueryRef offers multiple functions like subscribing and refetching
   * @returns QueryRef
   * @param query
   * @param variables
   * @param notifyOnNetworkStatusChange
   * if false the observable emits only once
   * if true the observable may emit multiple times and data object may be empty
   */
  public watchQueryRef(query: any, variables: any = {}, notifyOnNetworkStatusChange: boolean = false): QueryRef<any> {
    return this.apollo.watchQuery({
      notifyOnNetworkStatusChange,
      query,
      variables
    });
  }

  /**
   * Directly returns an observable that resolves ones on subscribe
   *
   * @param query
   * a query created with the graphql tag
   * right now gql tag returns a graphql query with the any type (may change in the future)
   *  no typesafte here for now
   * @param variables
   * object with the variables used by the query
   *
   * @returns Observable
   */
  public queryObservable(query: any, variables: any = {}): Observable<any> {
    const observable = this.apollo.query({
      query,
      variables
    });
    return observable;
  }

  /**
   * Directly returns an observable that resolves ones on subscribe
   * You may provide optimisticResponse
   * apollo will update cache based on that response
   * and updates it once again if the actual response comes in
   * @param mutation
   * @param variables
   * @param optimisticResponse
   */
  public mutateObservable(mutation: any, variables: any = {}, optimisticResponse?: any): Observable<any> {
    const observable = this.apollo.mutate({
      mutation,
      variables,
      optimisticResponse,
    });
    return observable;
  }
















  public sendUpdateQuery(query: any, variables: any = {}, refetchQuery?: any): Observable<any> {
    if (refetchQuery) {
      return this.apollo.mutate({
        mutation: query,
        variables: variables,
        refetchQueries: [{
          query: refetchQuery
        }]
      });
    } else {
      return this.apollo.mutate({
        mutation: query,
        variables: variables
      });
    }
  }

  public uploadImage(query : any, variables : any = {}) : Observable<any> {
    return this.apollo.mutate({
      mutation : query,
      variables : variables,
      context : { upload : true }
    });
  }

  public delete() {

  }

  public getType(sequence : String) : Observable<String> {
    return this.apollo.watchQuery<any>({
      query : Query(sequence),
    }).valueChanges.pipe(
      map(
        ({ data }) => {
          this.config.set("type", data.Entry);
          return data.Entry;
        }
      )
    );
  }
}
