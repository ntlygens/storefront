export enum FooterMenuType {
  BRAND,
  LEFT,
  RIGHT

}

export interface FooterRouteInfo {
  path: string;
  title: string;
  footerMenuType: FooterMenuType;

}
