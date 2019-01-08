import { DotsComponent } from './components/dots.component';
import { ArrowComponent } from './components/arrow.component';
import { NgModule } from '@angular/core';
import { SwiperDirective } from './directives/swiper.directive';
import { UILazyloadDirective } from './directives/ui-lazy-load.directive';
import { UiCarouselItemComponent } from './components/ui-carousel-item.component';
import { UiCarouselComponent } from './components/ui-carousel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SwiperDirective,
    UILazyloadDirective,
    DotsComponent,
    ArrowComponent,
    UiCarouselComponent,
    UiCarouselItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiCarouselComponent,
    UiCarouselItemComponent,
    DotsComponent,
    ArrowComponent,
    SwiperDirective,
    UILazyloadDirective,
    SwiperDirective
  ]
})
export class UiCarouselModule { }
