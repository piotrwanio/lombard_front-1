import {Transaction} from './transaction.model';

export interface Report {
  salesTurnover: number;
  profit: number;
  purchaseTransactions: Transaction[];
  sellingTransactions: Transaction[];
  missingItems: object;
  stockState: object;
}
