import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Product} from '../../models/product.model';
import {TransactionService} from '../../services/transaction.service';
import {timer} from 'rxjs';


@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {
  formProd: Product = {} as Product;
  products: Product[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  addProduct() {
    this.products.push(JSON.parse(JSON.stringify(this.formProd)));
  }

  makeTransaction() {
    console.log(this.formProd);
    const date = new Date();
    const transaction = {
      items : this.products,
      transactionType: 'purchase',
      transactionDate : date.toJSON()
    };
    this.transactionService
      .save(transaction)
      .subscribe(x => x);
  }
}
