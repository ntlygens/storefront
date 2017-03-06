import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-pnl',
  template: `
        <div class="banner_size card card-inverse rounded-0 border-0 mb-3 card-info text-center">
          <div class="card-block">
            <blockquote class="card-blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>

  `,
  styles: [`
    .banner_size {
      max-height: 150px;
    }

    .homeBannerBckgrnd {
      color: #0000cc;
      background-image: url("../../assets/banners/homeBanner2.jpg");
      background-size: cover;
    }

    .aboutBannerBckgrnd {
      color: #0000cc;
      font-size: 120%;
      background-image: url("../../assets/panoramic.jpg");
      background-size: cover;
    }

  `]
})
export class BannerPnlComponent implements OnInit {
  public isHomeBanner: boolean;

  public homeBannerPanelBackground: any;
  public aboutBannerPanelBackground: any;


  constructor() {
    this.isHomeBanner = false;
  }

  //TODO: write funcrion to get current location and apply correct background //

  ngOnInit() {

  }

}
