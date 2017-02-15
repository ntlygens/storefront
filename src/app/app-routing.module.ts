import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdblockPnlComponent } from "./home/adblock-pnl.component";
import { BannerPnlComponent } from "./home/banner-pnl.component";
import { Call2actionPnlComponent } from "./home/call2action-pnl.component";
import { HalfPortraitPnlComponent } from './home/half-portrait-pnl.component';
import { PortraitPnlComponent } from "./home/portrait-pnl.component";

import { AppContentDataType, AppContentData } from "./app.enum";


export const DISPLAY_COMPONENTS = [
  AdblockPnlComponent,
  BannerPnlComponent,
  Call2actionPnlComponent,
  HalfPortraitPnlComponent,
  PortraitPnlComponent
];

export const APP_DISPLAY_MODULE_ROUTES: AppContentData[] = [
  { size: 'col-md-8', static: '', header: 'adblock_header', title: 'adblock_title', subtitle: 'adblock_sub-title', content: 'adblock_content', image: 'adblock_image', call2action: 'adblock_call2action', footer: 'adblock_footer', dataType: AppContentDataType.ADBLOCK },
  { size: 'col-md-12', static: 'homeBannerBckgrnd', header: 'banner_header', title: 'banner_title', subtitle: 'banner_sub-title', content: 'banner_content', image: 'banner_image', call2action: 'banner_call2action', footer: 'banner_footer', dataType: AppContentDataType.BANNER }

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
