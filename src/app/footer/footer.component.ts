import { Component, OnInit } from '@angular/core';
//import { ROUTES } from './footer-routing.module';
import { MODULE_ROUTES } from '../app-routing.module';

//import { FooterMenuType } from './footer.enum';
import { HeaderMenuType } from '../app.enum';

@Component({
  selector: 'app-footer',
  template: `
    <nav class="breadcrumb col-md-12 fixed-bottom rounded-0 border-0">
      <a class="breadcrumb-item active" [routerLink]="[footerBrands.path]">{{footerBrands.title}}</a>
      <a *ngFor="let footerLink of footerMenuItems" class="breadcrumb-item" [routerLink]="[footerLink.path]">{{footerLink.title}}</a>
    </nav>

  `,
  styles: [`
    .breadcrumb {
      margin-bottom: 0;
    }

  `]
})

export class FooterComponent implements OnInit {
  public footerMenuItems: any[];
  public footerBrands: any;

  constructor () {}

  ngOnInit() {
    this.footerMenuItems = MODULE_ROUTES.filter(footerMenuItem => footerMenuItem.menuType !== HeaderMenuType.BRAND);
    this.footerBrands = MODULE_ROUTES.filter(footerBrand => footerBrand.menuType === HeaderMenuType.BRAND)[0];
  }

}
