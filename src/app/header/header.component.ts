import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class='jumbotron jumbotron-fluid'>
      <div class='container'>

        <div class='media'>
          <img id='hdr-logo' class='d-flex align-self-center mr-5' src='../../assets/logo.png' alt='Generic placeholder image'>
          <div class='media-body'>
            <h2 class='display-5 mt-0'>Streaming Radio</h2>
            <p>Tell a friend, to Tell a friend</p>
          </div>
        </div>

      </div>
    </div>
    <app-navbar></app-navbar>
  `,
  styles: [`
    .jumbotron {
      background-image: url('../../assets/bckgrnd/music-notes.jpg');
      background-repeat: repeat;
      background-size: 50%;
      margin-bottom: 0;
    }

    #hdr-logo {
      width: 25%;
    }

  `]
})
export class HeaderComponent {


}
