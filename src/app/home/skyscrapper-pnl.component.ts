import { Component, OnInit } from '@angular/core';
//import { ROUTES } from '../app-routing.module';
import { ROUTES } from '../home/home-routing.module';
import { AppContentDataType } from '../app.enum';

@Component({
  selector: 'app-skyscrapper-pnl',
  template: `
    <div class="{{skyscrapperPanels.size}} {{skyscrapperPanels.static_classes}}">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <header class="skyscrapper_header">
            <h2>header</h2>
          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  `,
  styles: [`
    .skyscrapper_size {
      max-width: 32%;
      max-height: 300px;
      right: 0px;
    }
    .skyscrapper_header h2 {
        color: darkgrey !important;
        font-style: oblique !important;
    }

  `]
})
export class SkyscrapperPnlComponent implements OnInit {
  public skyscrapperPanels: any;

  constructor() { }

  ngOnInit() {
    this.skyscrapperPanels = ROUTES.filter( panelData => panelData.dataType === AppContentDataType.SKYSCRAPPER)[0];

  }

}
