import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceBase {
  readonly BASE_URL: string = 'http://localhost:62530/api';
  // headers: HttpHeaders = new HttpHeaders();

  config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  public get(relativeUrl: string): Observable<any> {
    const url = this.BASE_URL + relativeUrl;
    return this.http.get(url);
  }

  // public get(relativeUrl: string, httpParams: HttpParams): Observable<any> {
  //   const url = this.BASE_URL + relativeUrl;
  //   return this.http.get(url, {params: httpParams});
  // }

  public post(relativeUrl: string, object: any): Observable<any> {
    const url = this.BASE_URL + relativeUrl;
    return this.http.post(url, JSON.stringify(object), this.config);
  }

}
