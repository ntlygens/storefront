import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AlertModule } from 'ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
//import { Ng2BreadcrumbModule } from './ng2-breadcrumb/ng2-breadcrumb';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    HomeModule,
    NavbarModule,
    FooterModule,
    //Ng2BreadcrumbModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }