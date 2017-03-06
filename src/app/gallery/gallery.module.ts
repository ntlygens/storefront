import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    GalleryRoutingModule
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
