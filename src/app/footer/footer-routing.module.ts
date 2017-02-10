import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterMenuType, FooterRouteInfo } from './footer.enum';

export const ROUTES: FooterRouteInfo[] = [
  { path: 'home', title: '', footerMenuType: FooterMenuType.BRAND },
  { path: 'about', title: 'About', footerMenuType: FooterMenuType.LEFT },
  { path: 'contact', title: 'Contact', footerMenuType: FooterMenuType.LEFT },
  { path: 'terms', title: 'Terms', footerMenuType: FooterMenuType.BRAND },

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})

export class FooterRoutingModule { }
