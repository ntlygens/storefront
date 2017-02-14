export enum AppContentDataType {
  ADBLOCK,
  BANNER,
  CALL2ACTION,
  HALFPORTRAIT,
  PORTRAIT,
  SKYSCRAPPER



}

export interface AppContentData {
  size: any;
  static_classes: any;
  header: any;
  title: any;
  subtitle: any;
  content: any;
  image: any;
  call2action: any;
  footer: any;
  dataType: AppContentDataType;
}
