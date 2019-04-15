import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../../services/transaction.service';
import {Product} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-selling-form',
  templateUrl: './selling-form.component.html',
  styleUrls: ['./selling-form.component.scss']
})
export class SellingFormComponent implements OnInit {
  formProd: Product = <Product>{};
  products: Product[] = [];

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
    const transaction = {
      items : this.products,
      transactionDate : date.toJSON()
    };
    this.transactionService
      .save(transaction)
      .subscribe(x => x);
  }

}
