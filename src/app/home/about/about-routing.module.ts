import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutContentDataType, AboutContentData } from './about.enum';

// import {AboutComponent} from './about.component';
import {ListenLiveComponent} from '../../components/listen-live.component';
import {BannerPnlComponent} from '../../components/banner-pnl.component';
import {Call2actionPnlComponent} from '../../components/call2action-pnl.component';
import {HalfPortraitPnlComponent} from '../../components/half-portrait-pnl.component';
import {PortraitPnlComponent} from '../../components/portrait-pnl.component';
import {SkyscrapperPnlComponent} from '../../components/skyscrapper-pnl.component';


export const MODULE_COMPONENTS = [
  // AboutComponent,
  ListenLiveComponent,
  BannerPnlComponent,
  Call2actionPnlComponent,
  HalfPortraitPnlComponent,
  PortraitPnlComponent,
  SkyscrapperPnlComponent
];


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
