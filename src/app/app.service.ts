import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Ticker} from './ticker.model';

@Injectable()
export class AppService {

  API_URL: string;

  constructor(private _httpClient: HttpClient) {
    this.API_URL = environment.API_URL;
  }

  /**
   * Returns ticker for currency pair
   * @param currency_pair [string] - if not provided then Returns data for the BTC/USD currency pair
   * @returns {Observable<Ticker>}
   */
  getTicker(currency_pair?: string): Observable<Ticker> {
    let bitstampUrl = `https://www.bitstamp.net/api/` + (currency_pair ? `v2/ticker/${currency_pair.trim()}/` : 'ticker/');
    return this._httpClient.get<Ticker>(`${this.API_URL}/bitstamp?url=${bitstampUrl}`);
  }
}
