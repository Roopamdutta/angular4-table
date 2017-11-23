import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {IContact} from './icontact';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiServiceService {
private _postUrl = 'http://address-book-demo.herokuapp.com/api/contacts';

  constructor(private http: Http) {
    this.http = http;
  }

   getPosts(): Observable<IContact[]> {
    return this.http.get(this._postUrl)
        .map(this.extractData);
}

private extractData(res: Response) {
    const body1 = res.json().contacts;
    return body1;
}
}
