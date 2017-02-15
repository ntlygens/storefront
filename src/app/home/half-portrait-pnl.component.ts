import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-portrait-pnl',
  template: `
    <div class="halfportrait_size card card-inverse card-danger text-center">
      <div class="card-block">
        <blockquote class="card-blockquote">
          <p>Half portrait ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  `,
  styles: [`
    .homeFillIn {
      min-height: 350px;
    }
  `]
})
export class HalfPortraitPnlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
