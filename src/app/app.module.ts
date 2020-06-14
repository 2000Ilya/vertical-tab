import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalTabComponent } from './vertical-tab/vertical-tab.component';
import { TabButtonComponent } from './tab-button/tab-button.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalTabComponent,
    TabButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
