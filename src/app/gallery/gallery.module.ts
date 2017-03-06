import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ng2-bootstrap';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
