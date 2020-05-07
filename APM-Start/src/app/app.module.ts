import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import {ProductService} from './products/product.service';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
  ],
  imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: 'products', component: ProductListComponent},
          //{ path: 'products/:id', component: ProductDetailComponent},
         // {path: 'welcome', component: WelcomeComponent},
          { path: '', redirectTo: '', pathMatch: 'full'},
         // { path: '**', component: PageNotFoundComponent}
        ], {useHash: true})
    ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
