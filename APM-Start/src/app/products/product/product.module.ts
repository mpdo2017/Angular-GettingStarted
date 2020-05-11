import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {ProductListComponent} from "../product-list/product-list.component";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductDetailComponent} from "../product-detail/product-detail/product-detail.component";
import {ConvertToSpacesPipe} from "../../shared/convert-to-spaces.pipe";


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
