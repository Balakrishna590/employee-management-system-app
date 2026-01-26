import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { throwError as observableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(protected titleService: Title) { }

  // 🔐 Common headers
  addRequestHttpHeader(): HttpHeaders {
    const token = localStorage.getItem('token');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  }

  addRequestHttpParams(params: Map<string, string>): HttpParams {
    let requestParams = new HttpParams();

    params.forEach((value, key) => {
      requestParams = requestParams.set(key, value);
    });
    
    return requestParams;
  }

  addRequestBodyHeader(req: Request | any) {
    return req;
  }

  getHost(): string {
    const host = window.location.host;
    return host;
  }

  getPageTitle() {
    const pageTitle = this.titleService.getTitle();
    return pageTitle;
  }

  extractData = (res: Response | any) => {
    return res.body || {};
  };

  handleResponse<T>(res: HttpResponse<T> | any): T {
    const body = res && res.body ? res.body : null;
    return body;
  }

  handleError = (error: HttpErrorResponse | any) => {
    let errMsg: string;

    errMsg = error.message ? error.message : error.toString();

    return observableThrowError(errMsg);
  }
}
