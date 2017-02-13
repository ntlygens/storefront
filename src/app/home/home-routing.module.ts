import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { GuideComponent } from './guide/guide.component';
import { SkyscrapperPnlComponent } from './skyscrapper-pnl.component';

import { HomeContentData, HomeContentDataType } from './home.enum';
import { AdblockPnlComponent } from "./adblock-pnl.component";
import { BannerPnlComponent } from "./banner-pnl.component";
import { Call2actionPnlComponent } from "./call2action-pnl.component";
import { HalfPortraitPnlComponent } from './half-portrait-pnl.component';
import { PortraitPnlComponent } from "./portrait-pnl.component";

export const MODULE_ROUTES: RouterModule[] = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guide', component: GuideComponent }


];

export const MODULE_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  GuideComponent,
  AdblockPnlComponent,
  BannerPnlComponent,
  Call2actionPnlComponent,
  HalfPortraitPnlComponent,
  PortraitPnlComponent,
  SkyscrapperPnlComponent
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
