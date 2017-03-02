import { Component, OnInit } from '@angular/core';
import { ROUTES } from './about-routing.module';
import { AboutContentDataType } from './about.enum';
// import { AppContentDataType } from "../../app.enum";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  public aboutContents: any;
  public aboutHeaders: any;

  public adblockPanels: any;
  public skyscrapperPanels: any;

  constructor() { }

  ngOnInit() {
    this.aboutContents = ROUTES.filter(aboutContent => aboutContent.dataType === AboutContentDataType.DATA)[0];
    this.aboutHeaders = ROUTES.filter(aboutHeader => aboutHeader.dataType === AboutContentDataType.HEADER)[0];

    //this.adblockPanels = DISPLAY_MODULE_ROUTES.filter(aboutPanels => aboutPanels.dataType === AppContentDataType.ADBLOCK )[0];
    //this.skyscrapperPanels = DISPLAY_MODULE_ROUTES.filter(aboutPanels => aboutPanels.dataType === AppContentDataType.SKYSCRAPPER )[0];

  }

}
