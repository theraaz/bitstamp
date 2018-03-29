import {Component} from '@angular/core';
import {AppService} from './app.service';
import {Ticker} from './ticker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pair: string;
  ticker: Ticker;
  processing = false;

  public availablePairs = [
    { name: 'BTC/USD', value: 'btcusd'},
    { name: 'ETH/USD', value: 'ethusd'},
    { name: 'XRP/USD', value: 'xrpusd'},
    { name: 'LTC/USD', value: 'ltcusd'}
    ];

  constructor(private _appService: AppService) {
    this.onPairSelect();
  }

  onPairSelect(_pair?: string) {
    _pair = typeof _pair !== 'undefined' ? _pair : null;
    this.pair = _pair;
    this.processing = true;
    this._appService.getTicker(_pair)
      .subscribe((_ticker: Ticker) => {
        this.ticker = _ticker;
        this.processing = false;
      }, (err) => {
        console.log(err);
        this.processing = false;
        // debugger;
      });
  }
}
