import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "../products/product-list/product-list.component";
import {ProductDetailGuard} from "../products/product-detail/product-detail.guard";
import {ProductDetailComponent} from "../products/product-detail/product-detail/product-detail.component";
import {WelcomeComponent} from "../home/welcome.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: '', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash: true})
  ]
})
export class AppRoutingModule { }
