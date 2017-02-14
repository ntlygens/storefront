import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { SkyscrapperPnlComponent } from './skyscrapper-pnl.component';

import { AppContentDataType, AppContentData } from "../../app/app.enum";
import { HomeContentData, HomeContentDataType } from './home.enum';

export const MODULE_ROUTES: RouterModule[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guide', component: GuideComponent }

];

export const MODULE_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  GuideComponent,
  SkyscrapperPnlComponent
];

export const ROUTES: AppContentData[] = [
  { size: 'skyscrapper_size', static_classes: 'card card-inverse card-primary mb-3 text-center', header: 'skyscrapper_header', title: 'skyscrapper_title', subtitle: 'skyscrapper_sub-title', content: 'skyscrapper_content', image: 'skyscrapper_image', call2action: 'skyscrapper_call2action', footer: 'skyscrapper_footer', dataType: AppContentDataType.SKYSCRAPPER }
];

export const JUMBOTRON_ROUTES: HomeContentData[] = [
  { title: 'title 1', subtitle: 'subtitle 1', banner: '../../assets/Irina.jpg', data: 'text data 1', dataType: HomeContentDataType.BANNER },
  { title: 'title 2', subtitle: 'subtitle 2', banner: '../../assets/material.jpg', data: '', dataType: HomeContentDataType.BANNER },
  { title: 'title 3', subtitle: 'subtitle 3', banner: '../../assets/panoramic.jpg', data: '', dataType: HomeContentDataType.BANNER }

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
