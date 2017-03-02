export enum HeaderMenuType {
  BRAND,
  LEFT,
  RIGHT
}

export interface HeaderRouteInfo {
  path: string;
  title: string;
  component: any;
  menuType: HeaderMenuType;
}
