import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen-live',
  template: `
        <div class='jumbotron jumbotron-fluid'>
          <div class='container'>

              <div class='card col-md-4 col-md-offset-4'>
                <div class='card-block'>
                  <h2 class='display-3 text-uppercase font-weight-bold'>listen live</h2>
                  <p class='card-text'>To the Best in Hip-Hop, R&B, Soca, Reggae and more</p>
                </div>
                <img class='card-img-bottom' src='../../assets/panels/listen.png' width='80%' alt='Card image cap'>
              </div>

          </div>
        </div>

  `,
  styles: [`
    .jumbotron {
      background-image: url('../../assets/bckgrnd/panel-3.jpg');
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

// TODO: use following url to generate live stream from popup window.
// TODO: http://cast4.citrus3.com:2199/tunein/smashradio1fm-stream.pls


export class ListenLiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
