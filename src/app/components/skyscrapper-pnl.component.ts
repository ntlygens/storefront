import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skyscrapper-pnl',
  template: `
    <div [ngClass]='{hSkyscrapperBg: true}' class='skyscrapper_size card card-inverse card-primary mb-3 text-center'>
      <div class='card-block'>
        <blockquote class='card-blockquote'>
          <header class='skyscrapper_header'>
            <h2>header</h2>
          </header>
          <p>Skyscrapper ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  `,
  styles: [`
    .skyscrapper_size {
      max-height: 600px;
      min-height: 400px;
    }
    .skyscrapper_header h2 {
        color: darkgrey !important;
        font-style: oblique !important;
    }
    .hSkyscrapperBg {
      /*background-image: url('../../assets/skyscrappers/skyscrapperBackground.jpg');*/
      background-size: cover;
      backgroun-repeat: no-repeat;
    }

  `]
})
export class SkyscrapperPnlComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
