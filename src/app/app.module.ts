import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddStockItemComponent } from './add-stock-item/add-stock-item.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { SalesWindowComponent } from './sales-window/sales-window.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStockItemComponent,
    LoginComponent,
    StockDetailsComponent,
    SalesWindowComponent,
    AddCategoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
