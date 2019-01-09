import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { UiCarouselColorConfig } from '../color-config.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dots',
  template: `
    <div class="dot" [ngStyle]="{'background-color': colorConfig.dotsColor}"
      *ngFor="let number of numbers"
      (click)="click(number)"
      [class.active]="activeDot === number">
    </div>
  `,
  styles : [`
      :host{
          position: absolute;
          display: inline-block;
          z-index: 1000;
      }

      :host(.left){
          bottom: 10px;
          left: 10px;
      }

      :host(.right){
          bottom: 10px;
          right: 10px;
      }

      :host(.middle){
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -moz-transform: translateX(-50%);
          -o-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
      }

      .dot{
          height: 10px;
          width: 10px;
          border-radius: 5px;
          background: white;
          opacity: .5;
          margin: 0 4px;
          display: inline-block;
      }

      .dot:hover{
          opacity: .9;
          cursor: pointer;
      }

      .dot.active{
          opacity: .9;
      }
  `]
})

export class DotsComponent implements OnInit {
  @Input() public activeDot = 0;
  @Input() public dotsCount: number;
  @Input() public colorConfig = new UiCarouselColorConfig();

  @HostBinding('class')
  @Input() position = 'left';

  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

  public numbers: Array<number>;

  constructor() {
  }

  ngOnInit() {
    this.numbers = Array(this.dotsCount).fill(0).map((x, i) => i);
  }

  click(index: any) {
    this.onClick.emit(index);
    this.activeDot = index;
  }
}
