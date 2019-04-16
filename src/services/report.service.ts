import { Injectable } from '@angular/core';
import {ServiceBase} from './servicebase';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private api: ServiceBase) {
  }

  public getAll(): Observable<Product[]> {
    return this.api.get('/report');
  }

  public getFromDate(fromDate: string): Observable<Product[]> {
    return this.api.get('/report/' + fromDate);
  }

  public getDateRange(fromDate: string, toDate: string): Observable<Product[]> {
    return this.api.get('/report/' + fromDate + '/' + toDate);
  }

}
