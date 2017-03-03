import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  template: `
        <div class="jumbotron jumbotron-fluid">
          <div class="container">

              <div class="card">
                <div class="card-block">
                  <h2 class="display-3">Social Media</h2>
                  <p class="card-text">To the Best in Hip-Hop, R&B, Soca, Reggae and more</p>
                </div>
              </div>

          </div>
        </div>

  `,
  styles: [`
      .jumbotron {
        /*background-image: url('../../assets/bckgrnd/panel-3.jpg');*/
        background-color: rgb(255, 255, 255);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-bottom: 0;

      }

      .display-4 {
        color: #E04946;
      }

      .card {
        border: 0;
        background-color: rgba(255, 255, 255, 0.7);
      }

  `]
})
export class SocialMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
