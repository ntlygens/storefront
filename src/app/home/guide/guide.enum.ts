export enum GuideContentDataType {
  HEADER,
  SUBHEADER,
  CONTENT,
  FOOTER
}

export interface GuideContentData {
  header: string;
  subheader: string;
  content: any;
  footer: any;
  dataType: GuideContentDataType;
}
