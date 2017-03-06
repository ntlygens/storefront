import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-gallery',
  template: `
        <div class="jumbotron jumbotron-fluid card-inverse" style="background-color: #333; border-color: #333;">
          <div class="container">
            <div class="card">
              <h2 class="display-4 card-title">IMAGE GALLERY</h2>
              <h3>Imge Slides go Here</h3>
            </div>
          </div>
        </div>

  `,
  styles: [`
    img {
      width: 100%;
    }

    .jumbotron {
      /*background-image: url('../../assets/bckgrnd/panel-2b.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      background-attachment: fixed;*/
      margin-bottom: 0;
    }

    .display-4 {
      color: #E04946;
    }

    .card {
      background-color: rgba(255, 255, 255, 0.83);
    }

  `]
})

export class MediaGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
