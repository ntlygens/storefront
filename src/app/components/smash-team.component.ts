import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smash-team',
  template: `
        <div class='jumbotron jumbotron-fluid'>
          <div class='container'>

              <div class='card-deck'>
                <div class='card mb-3'>
                  <img class='card-img-top' src='../../assets/panels/LadyKeyz.png' alt='Card image cap'>
                  <div class='card-block'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class='card mb-3'>
                  <img class='card-img-top' src='../../assets/panels/MimiHaze.png' alt='Card image cap'>
                  <div class='card-block'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>
                  </div>
                </div>
                <div class='card mb-3'>
                  <img class='card-img-top' src='../../assets/ES_MusicNPhilanthropy.png' alt='Card image cap'>
                  <div class='card-block'>
                    <h4 class='card-title'>Card title</h4>
                    <p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>

          </div>
        </div>

  `,
  styles: [`
    img {
      width: 100%;
    }

    .jumbotron {
      background-image: url('../../assets/bckgrnd/panel-2b.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: bottom;
      background-attachment: fixed;
      margin-bottom: 0;
    }

    .display-4 {
      color: #E04946;
    }

    .card {
      background-color: rgba(255, 255, 255, 0.83);
    }

  `]
})

export class SmashTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
