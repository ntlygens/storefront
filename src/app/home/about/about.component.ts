import { Component, OnInit } from '@angular/core';
import { ROUTES } from './about-routing.module';
import { AboutContentDataType } from './about.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  public aboutContents: any;
  public aboutHeaders: any;

  constructor() { }

  ngOnInit() {
    this.aboutContents = ROUTES.filter(aboutContent => aboutContent.dataType === AboutContentDataType.DATA)[0];
    this.aboutHeaders = ROUTES.filter(aboutHeader => aboutHeader.dataType === AboutContentDataType.HEADER)[0];

  }

}
