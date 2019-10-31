import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpService{

  constructor(private http: HttpClient) {}

  request(options): Observable<any>{
    return
  }

  get(url, data?, headers?): Observable<any>{
    return this.http.get(url, headers);
  }

  post(url, data, headers?): Observable<any>{
    return this.http.post(url, data, headers);
  }

  patch(url, data, headers?): Observable<any>{
    return this.http.patch(url, data, headers);
  }

  delete(url, data, headers?): Observable<any>{
    return this.http.delete(url, data);
  }

  //TODO create request options
  options(body?, headers?, params?){
    let http_params = new HttpParams(params);
    let http_headers = new HttpHeaders(headers);
    return {headers : http_headers, params : http_params};
  }


  //TODO: Handle errors and log stuff

}
