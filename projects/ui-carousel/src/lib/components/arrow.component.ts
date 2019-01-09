import { Component, Input, Output, EventEmitter, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { UiCarouselColorConfig } from '../color-config.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'arrow',
  template: `

    <div #arrow class="arrow" (click)="onClick()"
      [ngClass]="{'left': dir === 'left', 'right': dir === 'right', 'disabled': disabled}">
      <style #shadow-styling [innerHTML]="styling">
      </style>
      </div>


  `,
  styles: [`
  .arrow {
    position: absolute;
    height: 50px;
    width: 30px;
    opacity: .6;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    z-index: 1000;
  }

  .arrow.right {
    right: 5px;
    top: 50%;

    transform: scaleX(-1) translateY(-50%);
    -moz-transform: scaleX(-1) translateY(-50%);
    -o-transform: scaleX(-1) translateY(-50%);
    -webkit-transform: scaleX(-1) translateY(-50%);
    -ms-transform: scaleX(-1) translateY(-50%);
    filter: FlipH;
    -ms-filter: "FlipH";
  }

  .arrow.left{
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
  }

  .arrow:hover{
    opacity: .8;
    cursor: pointer;
  }

  .arrow:before{
    content: "";
    height: 3px;
    width: 30px;
    display: block;
    position: absolute;
    top: 14px;
    transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
  }
  .arrow:after{
    content: "";
    height: 3px;
    width: 30px;
    display: block;
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    position: absolute;
    bottom: 14px;
  }
  .arrow.disabled{
    opacity: .4;
  }
  .arrow.disabled:hover{
    opacity: .4;
    cursor: pointer;
  }`]
})

export class ArrowComponent implements OnInit {


  @Input() dir: string;
  @Input() disabled = true;
  @Input('colorConfig')
  get colorConfig(): UiCarouselColorConfig {
    return this._colorConfig;
  }
  set colorConfig(value: UiCarouselColorConfig) {
    this._colorConfig = value;
    this.createStyle();
  }

  @Output() onArrowClick: EventEmitter<any> = new EventEmitter<any>();

  public styling: string;
  public styleElement: any;

  private _colorConfig: UiCarouselColorConfig;

  constructor(private _el: ElementRef, private _renderer2: Renderer2) { }

  ngOnInit(): void {
    if (!this._colorConfig) {
      this.colorConfig = new UiCarouselColorConfig();
    }
  }

  onClick() {
    if (!this.disabled) {
      this.onArrowClick.emit();
      this.createStyle();
    }
  }

  createStyle() {
    const styling = `
      .arrow::before, .arrow::after {
        background: ${this.colorConfig.arrowColor};
      }
      `;

      if (this.styleElement) {
        this._renderer2.removeChild(this._renderer2.parentNode(this.styleElement), this.styleElement);
      }

      this.styleElement = this._renderer2.createElement('style');
      this.styleElement.appendChild(this._renderer2.createText(styling));

      this._el.nativeElement.appendChild(this.styleElement);
  }
}























