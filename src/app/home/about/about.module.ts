import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULE_COMPONENTS } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MODULE_COMPONENTS],
  exports: [MODULE_COMPONENTS]
})
export class AboutModule { }
