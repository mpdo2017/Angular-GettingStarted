import {Component, OnInit} from '@angular/core';
import {IProduct} from '../product';
import {ProductService} from '../product.service';

@Component({// metadata to define the template//
  selector: 'pm-products',
  templateUrl: './product-list.component.html', // defines the location to link template//
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})

export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  _listFilter = '';

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value) {
    this._listFilter = value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter): this.products;
  }

  constructor(private productService: ProductService) {
  } // place default values with more complex properties in the default constructor.

  filteredProducts: IProduct[];
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2019',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png'
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2019',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'assets/images/saw.png'
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2018',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'assets/images/xbox-controller.png'
    }
  ];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();// filters to lowercase
    return this.products.filter((product: IProduct) =>
    // creates a new array
    // tslint:disable-next-line:max-line-length
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);// each product in the list return as lowercase and filtered by index.
  }

  ngOnInit():void {
    this.productService.getProduct().subscribe({
      next(products){console.log(products)},
      error(err) {console.log(err)}
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onNotify(message: string): void{

  }

}

