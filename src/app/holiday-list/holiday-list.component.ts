import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/Rx';
import * as _ from 'lodash';

const key = 'ec3c4df2-d40f-44d1-a4fa-64ea9ea40191';
const country = 'US';
const year = '2017';
const month = '01';

const params = new HttpParams()
  .set('key', key)
  .set('country', country)
  .set('year', year)
  .set('month', month);

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {
  holidays$: Observable<any[]>;
  hideme = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.holidays$ = this.httpClient
      .get<any[]>('https://holidayapi.com/v1/holidays', {params})
      .map(data => _.values(data))
      .do(console.log);
  }
}
