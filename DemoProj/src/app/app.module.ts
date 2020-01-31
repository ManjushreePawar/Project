import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1 } from './modules/component1/component1';
import { Comp2 } from './modules/component2/comp2';
import { header } from './modules/headers/header';
import { Component3 } from './modules/component3/component3';

@NgModule({
  declarations: [
        AppComponent,
        Component1,
        Comp2,
        header,
        Component3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
