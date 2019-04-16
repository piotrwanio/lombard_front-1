import { Injectable } from '@angular/core';
import {ServiceBase} from './servicebase';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private api: ServiceBase) { }

  public getAll(): Observable<Product[]> {
    return this.api.get('/item');
  }

  public save(object: object): Observable<any> {
    console.log(object);
    return this.api.post('/product', object);
  }
}
