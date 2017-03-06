import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styles: [`
    .jumbotron {
      background-image: url('../assets/background-1.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
      background-attachment: fixed;

      margin-bottom: 0;
    }

    .card {
      background-color: rgba(255, 255, 255, 0.8);
      height: 200px;
    }

  `]
})
export class AccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
