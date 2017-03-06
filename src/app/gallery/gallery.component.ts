import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  //templateUrl: './gallery.component.html',
  template: `
    <div class="jumbotron jumbotron-fluid card-inverse" style="background-color: #333; border-color: #333;">
      <div class="container" >

        <div class="card border-0" style="background-color: transparent;">
          <div class="card-block text-center">
            <h3 class="card-title display-3 font-weight-bold text-uppercase">Media Gallery</h3>
            <h4 class="card-title">We show appreciation for our guests and fans</h4>
          </div>
        </div>

        <carousel [interval]="myInterval" [noWrap]="noWrapSlides">
          <slide *ngFor="let slide of slides;let index=index" [active]="slide.active">
            <img [src]="slide.image">
            <div class="carousel-caption">
              <h4>Slide {{index}}</h4>
              <p>{{slide.text}}</p>
            </div>
          </slide>
          <i class="fa fa-chevron-left left carousel-control"></i>
          <i class="fa fa-chevron-right right carousel-control"></i>
        </carousel>


      </div>
    </div>


  `,
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  private myInterval: number = 4000;
  private slides: any[];


  constructor() { }

  ngOnInit() {
    this.slides = SLIDES;
  }

}

const SLIDES = [
  { image: '../assets/carousel/material.jpg', text: 'this is the second slide' },
  { image: '../assets/carousel/Irina.jpg', text: 'this is the first slide' },
  { image: '../assets/carousel/panoramic.jpg', text: 'this is the third slide' }
];

interface galleryData {
  image: string;
  text: string;
}

