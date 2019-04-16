import { Injectable } from '@angular/core';
import {ServiceBase} from './servicebase';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private api: ServiceBase) {
  }

  public getAll(): Observable<Product[]> {
    return this.api.get('/report');
  }

  public getFromDate(): Observable<Product[]> {
    return this.api.get('/report');
  }

  public getDateRange(): Observable<Product[]> {
    return this.api.get('/report');
  }

}
