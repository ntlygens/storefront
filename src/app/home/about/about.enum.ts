export enum AboutContentDataType {
  HEADER,
  DATA
}

export interface AboutContentData {
  title: string;
  content: string;
  image: any;
  dataType: AboutContentDataType;
}
