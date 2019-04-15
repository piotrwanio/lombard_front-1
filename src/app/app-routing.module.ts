import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PurchaseFormComponent} from './purchase-form/purchase-form.component';
import {SellingFormComponent} from './selling-form/selling-form.component';

const routes: Routes = [
  { path: 'purchase', component: PurchaseFormComponent },
  { path: 'selling', component: SellingFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
