export enum HomeContentDataType {
  TITLE,
  SUBTITLE,
  BANNER,
  DATA

}

export interface HomeContentData {
  title: string;
  subtitle: string;
  banner: string;
  data: any;
  dataType: HomeContentDataType;

}
