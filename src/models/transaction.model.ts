import {Product} from './product.model';

export interface Transaction {
  items: Product[];
  transactionDate: string;
}
