import { Component, OnInit } from '@angular/core';
import { DISPLAY_MODULE_ROUTES, JUMBOTRON_ROUTES } from './home-routing.module';
import { HomeContentDataType } from './home.enum';
import { AppContentDataType } from '../app.enum';


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

  public adblockPanels: any;
  public bannerPanels: any;
  public call2actionPanels: any;
  public halfportraitPanels: any;
  public portraitPanels: any;
  public skyscrapperPanels: any;

  constructor() { }

  ngOnInit() {
    this.jumbotronTitles = JUMBOTRON_ROUTES.filter( jumbotronData => jumbotronData.dataType === HomeContentDataType.TITLE );
    this.jumbotronSubTitles = JUMBOTRON_ROUTES.filter( jumbotronData => jumbotronData.dataType === HomeContentDataType.SUBTITLE );
    this.jumbotronBanners = JUMBOTRON_ROUTES.filter( jumbotronData => jumbotronData.dataType === HomeContentDataType.BANNER )[0];
    this.jumbotronDatas = JUMBOTRON_ROUTES.filter( jumbotronData => jumbotronData.dataType === HomeContentDataType.DATA );

    this.adblockPanels = DISPLAY_MODULE_ROUTES.filter( displayModuleData => displayModuleData.dataType === AppContentDataType.ADBLOCK )[0];
    this.bannerPanels = DISPLAY_MODULE_ROUTES.filter( displayModuleData => displayModuleData.dataType === AppContentDataType.BANNER )[0];
    this.call2actionPanels = DISPLAY_MODULE_ROUTES.filter( displayModuleData => displayModuleData.dataType === AppContentDataType.CALL2ACTION )[0];
    this.halfportraitPanels = DISPLAY_MODULE_ROUTES.filter( displayModuleData => displayModuleData.dataType === AppContentDataType.HALFPORTRAIT )[0];
    this.portraitPanels = DISPLAY_MODULE_ROUTES.filter( displayModuleData => displayModuleData.dataType === AppContentDataType.PORTRAIT )[0];
    this.skyscrapperPanels = DISPLAY_MODULE_ROUTES.filter( displayModuleData => displayModuleData.dataType === AppContentDataType.SKYSCRAPPER )[0];

  }

}
