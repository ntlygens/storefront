import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  // templateUrl: './gallery.component.html',
  template: `
    <div class='jumbotron jumbotron-fluid card-inverse' style='background-color: #333; border-color: #333;'>
      <div class='container' >

        <div class='card border-0' style='background-color: transparent;'>
          <div class='card-block text-center'>
            <h3 class='card-title display-3 font-weight-bold text-uppercase'>Media Gallery</h3>
            <h4 class='card-title'>We show appreciation for our guests and fans</h4>
          </div>
        </div>

        <ngb-carousel [interval]='myInterval' [wrap]='noWrap'>
          <ng-template ngbSlide *ngFor='let slide of slides;let index=index'>
            <img [src]='slide.image'>
            <div class='carousel-caption'>
              <h4>Slide {{index}}</h4>
              <p>{{slide.text}}</p>
            </div>
          </ng-template>
          <i class='fa fa-chevron-left left carousel-control'></i>
          <i class='fa fa-chevron-right right carousel-control'></i>
        </ngb-carousel>


      </div>
    </div>


  `,
  styles: [`
    .jumbotron {
      background-image: url('../../assets/bckgrnd/panel-6.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

  `]
})

export class GalleryComponent implements OnInit {
  private myInterval = 4000;
  private slides: Array<GalleryData>;


  constructor() { }

  ngOnInit() {
    this.slides = SLIDES;
  }

}

const SLIDES: GalleryData[] = [
  { Image: '../assets/carousel/material.jpg', Text: 'this is the second slide' },
  { Image: '../assets/carousel/Irina.jpg', Text: 'this is the first slide' },
  { Image: '../assets/carousel/panoramic.jpg', Text: 'this is the third slide' }
];

export interface GalleryData {
  Image: string;
  Text: string;
}

