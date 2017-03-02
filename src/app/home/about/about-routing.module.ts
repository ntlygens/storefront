import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { AppContentDataType, AppContentData } from '../../app.enum';
import { AboutContentDataType, AboutContentData } from './about.enum';
import {AboutComponent} from "./about.component";
import {AdblockPnlComponent} from "../adblock-pnl.component";
import {BannerPnlComponent} from "../banner-pnl.component";
import {Call2actionPnlComponent} from "../call2action-pnl.component";
import {HalfPortraitPnlComponent} from "../half-portrait-pnl.component";
import {PortraitPnlComponent} from "../portrait-pnl.component";
import {SkyscrapperPnlComponent} from "../skyscrapper-pnl.component";


export const MODULE_COMPONENTS = [
  AboutComponent,
  AdblockPnlComponent,
  BannerPnlComponent,
  Call2actionPnlComponent,
  HalfPortraitPnlComponent,
  PortraitPnlComponent,
  SkyscrapperPnlComponent
];

/*
export const DISPLAY_MODULE_ROUTES: AppContentData[] = [
  { size: 'col-md-8', static: '', header: 'adblock_header', title: 'adblock_title', subtitle: 'adblock_sub-title', content: 'adblock_content', image: 'adblock_image', call2action: 'adblock_call2action', footer: 'adblock_footer', dataType: AppContentDataType.ADBLOCK },
  { size: 'col-md-12', static: 'aboutBannerBckgrnd', header: 'banner_header', title: 'banner_title', subtitle: 'banner_sub-title', content: 'banner_content', image: 'banner_image', call2action: 'banner_call2action', footer: 'banner_footer', dataType: AppContentDataType.BANNER },
  { size: 'col-2 col-xs-4', static: '', header: 'call2action_header', title: 'call2action_title', subtitle: 'call2action_sub-title', content: 'call2action_content', image: 'call2action_image', call2action: 'call2action_call2action', footer: 'call2action_footer', dataType: AppContentDataType.CALL2ACTION },
  { size: 'col-md-4', static: '', header: 'halfportrait_header', title: 'halfportrait_title', subtitle: 'halfportrait_sub-title', content: 'halfportrait_content', image: 'halfportrait_image', call2action: 'halfportrait_call2action', footer: 'halfportrait_footer', dataType: AppContentDataType.HALFPORTRAIT },
  { size: 'col-md-4', static: '', header: 'portrait_header', title: 'portrait_title', subtitle: 'portrait_sub-title', content: 'portrait_content', image: 'portrait_image', call2action: 'portrait_call2action', footer: 'portrait_footer', dataType: AppContentDataType.PORTRAIT },
  { size: 'col-md-4', static: 'hSkyscrapperBg', header: 'skyscrapper_header', title: 'skyscrapper_title', subtitle: 'skyscrapper_sub-title', content: 'skyscrapper_content', image: 'skyscrapper_image', call2action: 'skyscrapper_call2action', footer: 'skyscrapper_footer', dataType: AppContentDataType.SKYSCRAPPER }
];
*/

export const ROUTES: AboutContentData[] = [
  { title: 'about1', content: 'about 1 content', image: '../../assets/panoramic.jpg', dataType: AboutContentDataType.HEADER },
  { title: 'about2', content: 'about 2 content', image: '../../assets/panoramic.jpg', dataType: AboutContentDataType.DATA },
  { title: 'about3', content: 'about 3 content', image: '../../assets/panoramic.jpg', dataType: AboutContentDataType.DATA },
  { title: 'about4', content: 'about 4 content', image: '../../assets/panoramic.jpg', dataType: AboutContentDataType.DATA },

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
