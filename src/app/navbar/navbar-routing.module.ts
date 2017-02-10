import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuType, RouteInfo } from './navbar.enum';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Home', menuType: MenuType.BRAND },
  { path: 'about', title: 'About', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];


@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class NavbarRoutingModule { }

