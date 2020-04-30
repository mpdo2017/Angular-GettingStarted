import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  // defines the location to link template//
  styleUrls: ['./product-list.component.css']
})
//metadata to define the template//

export class ProductListComponent  {
  pageTitle: string = 'Product List';

  constructor() { }
}
