import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PurchaseFormComponent} from './purchase-form/purchase-form.component';
import {SellingFormComponent} from './selling-form/selling-form.component';
import {ReportComponent} from './report/report.component';

const routes: Routes = [
  { path: 'purchase', component: PurchaseFormComponent },
  { path: 'selling', component: SellingFormComponent },
  { path: 'reports', component: ReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
