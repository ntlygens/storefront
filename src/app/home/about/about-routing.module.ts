import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutContent, AboutContentData } from './about.enum';

export const ROUTES: AboutContentData[] = [
  { title: 'about1', content: 'about 1 content', dataType: AboutContent.HEADER },
  { title: 'about2', content: 'about 2 content', dataType: AboutContent.DATA },
  { title: 'about3', content: 'about 3 content', dataType: AboutContent.DATA },
  { title: 'about4', content: 'about 4 content', dataType: AboutContent.DATA },

];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
