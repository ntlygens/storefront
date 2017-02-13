import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <alert type="success">hello alert</alert>
    <hr>
    <accordion>
      <accordion-group [panelClass] = 'panel-primary'>
        <div accordion-heading>
          testing
        </div>
          mytest
      </accordion-group>
    </accordion>
    <hr>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Features</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>
  `,
  styles: [

  ]
})
export class HeaderComponent {

}