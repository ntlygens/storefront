import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { GuideComponent } from './home/guide/guide.component';

import { HeaderMenuType, HeaderRouteInfo } from '../app/app.enum';

export const MODULE_ROUTES: HeaderRouteInfo[] = [
  { path: '', title: 'Home', component: HomeComponent, menuType: HeaderMenuType.BRAND },
  { path: 'about', title: 'About', component: AboutComponent, menuType: HeaderMenuType.RIGHT },
  { path: 'guide', title: 'Guide', component: GuideComponent, menuType: HeaderMenuType.RIGHT },
  { path: 'contact', title: 'Contact', component: GuideComponent, menuType: HeaderMenuType.RIGHT }

];

export const MODULE_ROUTES_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  GuideComponent

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule {}
