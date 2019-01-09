import { UiCarouselColorConfig } from './../../projects/ui-carousel/src/lib/color-config.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui-carousel2';
  public colorConfigy;

  ngOnInit(): void {
      this.colorConfigy = new UiCarouselColorConfig('grey', 'yellow', 'green');
    }
}
