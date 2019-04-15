import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Product} from '../../models/product.model';


@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.scss']
})
export class PurchaseFormComponent implements OnInit {
  formProd: Product = {} as Product;

  constructor() { }

  ngOnInit() {
    // this.userForm = this.formBuilder.group({
    //   firstName: [''],
    //   lastName: [''],
    //   email: [''],
    //   password: [''],
    // });
  }

  makeTransaction(myform) {
    console.log('hej');
  }
}
