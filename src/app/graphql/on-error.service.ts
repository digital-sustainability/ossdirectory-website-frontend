import { Injectable } from '@angular/core';
import { RetryLink } from "apollo-link-retry";
import { onError } from "apollo-link-error";

@Injectable({
  providedIn: 'root'
})
export class OnErrorService {

  constructor() {}

  public unauthorizedRetry() {
      const link = onError(({ operation, graphQLErrors, networkError, response, forward}) => {
        if (graphQLErrors) {
            for (let err of graphQLErrors) {
                
                // TODO: show modal for login and retry request on succesfull login
                // return forward(operation); 
            }
        }
      });

      return link;
  }
}
