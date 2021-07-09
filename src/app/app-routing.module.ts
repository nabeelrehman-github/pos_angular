import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddStockItemComponent } from './add-stock-item/add-stock-item.component';
import { LoginComponent } from './login/login.component';
import { SalesWindowComponent } from './sales-window/sales-window.component';
import { LoginGuardService } from './services/login-guard.service';
import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
  {path: 'add-category', component: AddCategoryComponent },
  {path: 'add-stock-item', component: AddStockItemComponent },
  {path: 'stock-details', component: StockDetailsComponent },
  {path: 'sales', component: SalesWindowComponent },
  {path: 'login', component: LoginComponent },
  {path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
