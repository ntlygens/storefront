import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from '../navbar/navbar.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
  ],
  declarations: [HeaderComponent],
  providers: [],
  bootstrap: [],
  exports: [HeaderComponent]
})
export class HeaderModule { }
