import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait-pnl',
  template: `
    <div class="halfportrait_size card card-inverse card-warning text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Portrait ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  `,
  styles: [`
    .halfportrait_size {
      min-height: 400px;
      max-height: 500px;
    }
  `]
})
export class PortraitPnlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
