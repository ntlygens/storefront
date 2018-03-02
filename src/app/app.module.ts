import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// import { AlertModule } from 'ng2-bootstrap';
// import { AccordionModule } from 'ng2-bootstrap';
// import { CollapseModule } from 'ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    // AlertModule.forRoot(),
    // AccordionModule.forRoot(),
    // CollapseModule.forRoot(),
    HomeModule,
    HeaderModule,
    FooterModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  exports: [

  ]
})
export class AppModule { }
