import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styles: [`
    .jumbotron {
      background-image: url('../assets/background-1.jpg');
      background-size: cover;
      background-repeat: no-repeat;

    }

  `]
})
export class AccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
