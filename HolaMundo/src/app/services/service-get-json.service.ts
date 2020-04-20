import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceGetJSONService {

  constructor(public http:HttpClient) { }

  /**
   * getJson
   */
  public getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
