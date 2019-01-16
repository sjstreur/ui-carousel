import { UiCarouselModule } from '../../projects/ui-carousel/src/lib/ui-carousel.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
