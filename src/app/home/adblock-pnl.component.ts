import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adblock-pnl',
  template: `
        <div class="adblock_size card card-inverse card-success mb-3 text-center">
          <div class="card-block">
            <blockquote class="card-blockquote">
              <header class="adblock_header">
                <h2>header</h2>
              </header>
              <p>AdBlock ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>

  `,
  styles: [`
    .adblock_size {
      max-height: 200px;
    }
  `]
})

export class AdblockPnlComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
