import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './home-routing.module';
// import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [MODULE_COMPONENTS],
  exports: [MODULE_COMPONENTS]
})
export class HomeModule { }
