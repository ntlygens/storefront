import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call2action-pnl',
  template: `
        <div class="card card-inverse card-warning mb-3 text-center">
          <div class="card-block">
            <blockquote class="card-blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>

  `,
  styles: []
})
export class Call2actionPnlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}