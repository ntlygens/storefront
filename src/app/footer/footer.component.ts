import { Component, OnInit } from '@angular/core';
import { ROUTES } from './footer-routing.module';
import { FooterMenuType } from './footer.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  public footerMenuItems: any;
  public footerBrands: any;

  constructor () {}

  ngOnInit() {
    this.footerMenuItems = ROUTES.filter(footerMenuItem => footerMenuItem.footerMenuType === FooterMenuType.LEFT)[0];
    this.footerBrands = ROUTES.filter(footerBrand => footerBrand.footerMenuType === FooterMenuType.BRAND)[0];
  }

}
