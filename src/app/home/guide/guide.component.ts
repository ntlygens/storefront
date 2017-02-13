import { Component, OnInit } from '@angular/core';
import { ROUTES } from './guide-routing.module';
import { GuideContentDataType } from './guide.enum';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

export class GuideComponent implements OnInit {
  public guideHeaders: any;
  public guideSubHeaders: any;
  public guideContents: any;
  public guideFooters: any;

  constructor() { }

  ngOnInit() {
    this.guideHeaders = ROUTES.filter( guideHeader => guideHeader.dataType === GuideContentDataType.HEADER )[0];
    this.guideSubHeaders = ROUTES.filter( guideSubHeader => guideSubHeader.dataType === GuideContentDataType.SUBHEADER )[0];
    this.guideContents = ROUTES.filter( guideContent => guideContent.dataType === GuideContentDataType.CONTENT )[0];
    this.guideFooters = ROUTES.filter( guideFooter => guideFooter.dataType === GuideContentDataType.FOOTER )[0]
  }

}
