import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ng2-bootstrap/carousel/carousel.module';
import { MODULE_ROUTES_COMPONENTS, MODULE_ROUTES } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES),
    CarouselModule
  ],
  declarations: [MODULE_ROUTES_COMPONENTS],
  exports: [MODULE_ROUTES_COMPONENTS]
})
export class HomeModule { }
