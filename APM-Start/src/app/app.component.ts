import { Component } from '@angular/core';


@Component({
  selector: 'pm-root',
  template: `
    <ul class='nav navbar-nav'>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
      <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent  {
  pageTitle = 'Acme Product Management';
}
