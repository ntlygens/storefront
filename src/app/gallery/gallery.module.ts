import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbCarouselModule
    // CarouselModule,
  ],
  declarations: [GalleryComponent],
  exports: [GalleryComponent]
})
export class GalleryModule { }
