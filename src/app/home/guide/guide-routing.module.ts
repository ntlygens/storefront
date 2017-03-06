import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GuideContentDataType, GuideContentData } from './guide.enum';

export const ROUTES: GuideContentData[] = [
  { header: 'header1', subheader: 'subheader1', content: 'content 1', footer: 'footer 1', dataType: GuideContentDataType.HEADER },
  { header: 'header2', subheader: 'subheader2', content: 'content 2', footer: 'footer 2', dataType: GuideContentDataType.SUBHEADER },
  { header: 'header3', subheader: 'subheader3', content: 'content 3', footer: 'footer 3', dataType: GuideContentDataType.CONTENT },
  { header: 'header4', subheader: 'subheader4', content: 'content 4', footer: 'footer 4', dataType: GuideContentDataType.CONTENT },
  { header: 'header5', subheader: 'subheader5', content: 'content 5', footer: 'footer 5', dataType: GuideContentDataType.FOOTER }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class GuideRoutingModule { }
