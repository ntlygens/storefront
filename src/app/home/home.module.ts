import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ng2-bootstrap/carousel/carousel.module';
import { AccessModule } from '../access/access.module';
import { MODULE_ROUTES_COMPONENTS, MODULE_ROUTES } from '../app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AccessModule,
    RouterModule.forChild(MODULE_ROUTES),
    CarouselModule
  ],
  declarations: [MODULE_ROUTES_COMPONENTS],
  exports: [MODULE_ROUTES_COMPONENTS]
})
export class HomeModule { }
