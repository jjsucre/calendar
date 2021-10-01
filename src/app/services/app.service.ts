import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  rootURL = '/api';

  getEvents(): Observable<any> {
    return this._http.get(this.rootURL + '/events');
  }
}