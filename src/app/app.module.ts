import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';

@NgModule({
  declarations: [
    AppComponent,
    CesiumDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
