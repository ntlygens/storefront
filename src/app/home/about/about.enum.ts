export enum AboutContent {
  HEADER,
  DATA
}

export interface AboutContentData {
  title: string;
  content: string;
  dataType: AboutContent;
}
