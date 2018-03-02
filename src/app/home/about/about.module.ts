import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MODULE_COMPONENTS } from './about-routing.module';
// import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // AboutComponent,
    MODULE_COMPONENTS]
  ,
  exports: [
    // AboutComponent,
    MODULE_COMPONENTS
  ]
})
export class AboutModule { }
