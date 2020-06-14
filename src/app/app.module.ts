import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalTabComponent } from './vertical-tab/vertical-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
