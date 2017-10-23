import { Market } from '../market/market';
import { Palmares } from '../palmares/palmares';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
/*const Http = require('http')
*/
@Injectable()
export class PalmaresService {
  url: string
  constructor(private http: Http) {
      this.url = 'https://calm-thicket-38975.herokuapp.com/api'
  }

  /*pushData(data) {
    var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if(data.temperature < 36.5 || data.temperature > 37.5 || data.heartbear < 120 )
          data.sick = 1
        else data.sick = 0
        return this.http.post('http://localhost:8000/data/', JSON.stringify(data),
         { headers: headers }) .map(response => response.json());
  }*/
  getPalmares(): Observable<Palmares[]> {
    return this.http.get(`${this.url}/palmares`)
            .map(res => res.json())
  }

  getMarket(): Observable<Market[]> {
    return this.http.get(`${this.url}/market`)
            .map(res => res.json())
  }
}
