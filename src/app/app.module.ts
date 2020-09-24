import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { Bar2Component } from './bar2/bar2.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    Bar2Component,
    HorizontalBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
