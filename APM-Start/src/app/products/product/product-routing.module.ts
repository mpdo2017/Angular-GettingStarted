import {RouterModule} from "@angular/router";
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductDetailGuard} from "../product-detail/product-detail.guard";
import {ProductDetailComponent} from "../product-detail/product-detail/product-detail.component";
import {NgModule} from "@angular/core";


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate: [ProductDetailGuard],
        component: ProductDetailComponent}
    ])
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule{ };
