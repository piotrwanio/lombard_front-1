import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBase } from './servicebase';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private api: ServiceBase) { }

  public getAll(): Observable<Product[]> {
    return this.api.get('/item');
  }

  public save(object: object): Observable<any> {
    console.log(object);
    return this.api.post('/transaction', object);
  }
}
