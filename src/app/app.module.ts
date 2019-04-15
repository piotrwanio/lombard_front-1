import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SellingFormComponent } from './selling-form/selling-form.component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SellingFormComponent,
    PurchaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
