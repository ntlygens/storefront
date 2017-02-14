import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutContentDataType, AboutContentData } from './about.enum';

export const ROUTES: AboutContentData[] = [
  { title: 'about1', content: 'about 1 content', dataType: AboutContentDataType.HEADER },
  { title: 'about2', content: 'about 2 content', dataType: AboutContentDataType.DATA },
  { title: 'about3', content: 'about 3 content', dataType: AboutContentDataType.DATA },
  { title: 'about4', content: 'about 4 content', dataType: AboutContentDataType.DATA },

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
