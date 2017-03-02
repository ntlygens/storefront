import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { GuideComponent } from './home/guide/guide.component';

export const MODULE_ROUTES: RouterModule[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guide', component: GuideComponent }

];

export const MODULE_ROUTES_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  GuideComponent

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
