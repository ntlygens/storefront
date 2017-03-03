import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MODULE_ROUTES_COMPONENTS, MODULE_ROUTES } from '../app-routing.module';
import { CarouselModule } from 'ng2-bootstrap/carousel/carousel.module';
import { AccessModule } from '../access/access.module';

import { ListenLiveComponent } from '../components/listen-live.component';
import { SmashTeamComponent } from '../components/smash-team.component';
import { SocialMediaComponent } from '../components/social-media.component';

@NgModule({
  imports: [
    CommonModule,
    AccessModule,
    RouterModule.forChild(MODULE_ROUTES),
    CarouselModule
  ],
  declarations: [
    MODULE_ROUTES_COMPONENTS,
    ListenLiveComponent,
    SmashTeamComponent,
    SocialMediaComponent
  ],
  exports: [
    MODULE_ROUTES_COMPONENTS,
    ListenLiveComponent,
    SmashTeamComponent,
    SocialMediaComponent
  ]
})
export class HomeModule { }
