import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';

export const MODULE_ROUTES: RouterModule[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent }

];

export const MODULE_COMPONENTS = [
  HomeComponent,
  AboutComponent
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
