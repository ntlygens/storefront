import { Component, OnInit } from '@angular/core';
import { MODULE_ROUTES } from '../../app-routing.module';
import { HeaderMenuType } from '../../app.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`

  `]
})

export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {
    this.menuItems = MODULE_ROUTES.filter(menuItem => menuItem.menuType !== HeaderMenuType.BRAND);
    this.brandMenu = MODULE_ROUTES.filter(menuItem => menuItem.menuType === HeaderMenuType.BRAND)[0];

  }

  public get menuIcon(): string{
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === HeaderMenuType.RIGHT
    }
  }

}
