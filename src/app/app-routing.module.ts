import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdblockPnlComponent } from "./home/adblock-pnl.component";
import { BannerPnlComponent } from "./home/banner-pnl.component";
import { Call2actionPnlComponent } from "./home/call2action-pnl.component";
import { HalfPortraitPnlComponent } from './home/half-portrait-pnl.component';
import { PortraitPnlComponent } from "./home/portrait-pnl.component";


export const DISPLAY_COMPONENTS = [
  AdblockPnlComponent,
  BannerPnlComponent,
  Call2actionPnlComponent,
  HalfPortraitPnlComponent,
  PortraitPnlComponent
];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
