import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebGadgetModule } from 'projects/web-gadget/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebGadgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
