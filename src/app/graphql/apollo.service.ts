import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';


const TEST_SUBSCRIPTION = gql`
    subscription {
        test_sub
    }
`;

const TEST_QUERY = gql`
    query {
        test(test : "test")
    }
`;

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

    public ref: QueryRef<any>;

    constructor(
        private apollo: Apollo
    ) {
        this.ref = this.apollo.watchQuery({
            query: TEST_QUERY
        });
        this.ref.valueChanges.subscribe((res) => console.log(res));
    }

    public test() {
      this.ref.subscribeToMore({
          document : TEST_SUBSCRIPTION,
          updateQuery: (prev, sub) => {
              console.log(prev);
              console.log(sub);
              return {
                  test : "newtest",
              };
          }
      });
    }
}
