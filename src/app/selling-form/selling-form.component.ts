import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';
import {Transaction} from '../../models/transaction.model';

@Component({
  selector: 'app-selling-form',
  templateUrl: './selling-form.component.html',
  styleUrls: ['./selling-form.component.scss']
})
export class SellingFormComponent implements OnInit {
  formProd: Product = {} as Product;
  products: Product[] = [];
  transaction: Transaction = {} as Transaction;

  constructor(private  transactionService: TransactionService,
              private  productService: ProductService) { }

  ngOnInit() {
    this.formProd.name = 'sssss';
    this.productService
      .getAll()
      .subscribe(x => this.products = x);
  }

  getProducts() {

  }

  makeTransaction() {
    const date = new Date();
    window.alert(date.toJSON());
    this.transaction.items = this.products;
    this.transaction.transactionDate = date.toJSON();
    this.transactionService
      .save(this.transaction)
      .subscribe(x => x);
  }

}
