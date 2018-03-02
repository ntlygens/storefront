import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MODULE_ROUTES_COMPONENTS, MODULE_ROUTES } from '../app-routing.module';
import { AccessModule } from '../access/access.module';
import { GalleryModule } from '../gallery/gallery.module';

import { ListenLiveComponent } from '../components/listen-live.component';
import { SmashTeamComponent } from '../components/smash-team.component';
import { SocialMediaComponent } from '../components/social-media.component';


@NgModule({
  imports: [
    CommonModule,
    AccessModule,
    HttpClientModule,
    GalleryModule,
    RouterModule.forChild(MODULE_ROUTES),
  ],
  declarations: [
    MODULE_ROUTES_COMPONENTS,
    ListenLiveComponent,
    SmashTeamComponent,
    SocialMediaComponent,
  ],
  exports: [
    MODULE_ROUTES_COMPONENTS,
    ListenLiveComponent,
    SmashTeamComponent,
    SocialMediaComponent,
  ]
})
export class HomeModule { }
