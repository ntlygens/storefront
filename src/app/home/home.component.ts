import { Component, OnInit } from '@angular/core';
import { JUMBOTRON_ROUTES } from "./home-routing.module";
import { HomeContentDataType } from "./home.enum";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public jumbotronTitles: any;
  public jumbotronSubTitles: any;
  public jumbotronBanners: any;
  public jumbotronDatas: any;

  constructor() { }

  ngOnInit() {
    this.jumbotronTitles = JUMBOTRON_ROUTES.filter( jumbotronTitle => jumbotronTitle.dataType === HomeContentDataType.TITLE );
    this.jumbotronSubTitles = JUMBOTRON_ROUTES.filter( jumbotronSubTitle => jumbotronSubTitle.dataType === HomeContentDataType.SUBTITLE );
    this.jumbotronBanners = JUMBOTRON_ROUTES.filter( jumbotronBanner => jumbotronBanner.dataType === HomeContentDataType.BANNER );
    this.jumbotronDatas = JUMBOTRON_ROUTES.filter( jumbotronData => jumbotronData.dataType === HomeContentDataType.DATA );
  }

}
