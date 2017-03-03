import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call2action-pnl',
  template: `
        <div class="call2action_size card card-inverse card-warning mb-3 text-center">
          <div class="card-block">
            <blockquote class="card-blockquote">
              <p>Click</p>
              <footer></footer>
            </blockquote>
          </div>
        </div>

  `,
  styles: [`
    .call2action_size {
      max-height: 150px;
    }
  `]
})
export class Call2actionPnlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
