import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="jumbotron">
      <div class="container">

        <div class="media">
          <img id="hdr-logo" class="d-flex align-self-center mr-5" src="../../assets/logo.png" alt="Generic placeholder image">
          <div class="media-body">
            <h2 class="display-4 mt-0">Streaming Radio</h2>
            <p>Tell a friend, to Tell a friend</p>
            <!--p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p-->
          </div>
        </div>

      </div>
    </div>

    <app-navbar></app-navbar>

  `,
  styles: [`
    .jumbotron {
      margin-bottom: 0;
    }

    #hdr-logo {
      width: 25%;
    }

  `]
})
export class HeaderComponent {


}
