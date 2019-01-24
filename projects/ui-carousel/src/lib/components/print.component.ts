import { Component, Input, Output, EventEmitter, ElementRef, Renderer2, OnInit } from '@angular/core';
import { UiCarouselColorConfig } from '../color-config.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'print-button',
  template: `
    <div #printButton
    class="print-button"
    (click)="onClick()"
    [ngClass]="{'disabled': disabled}"
    [ngStyle]="{'background-color': colorConfig.printButtonBackgroundColor}">
      <span [ngStyle]="{'color': colorConfig.printButtonFontColor}">print</span>
    </div>
  `,
  styles: [`
  .print-button {
    position: absolute;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    width: 60px;
    opacity: .6;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    z-index: 1000;
    right: 20px;
    top: 20px;
  }

  .print-button.disabled{
    opacity: .4;
  }
  .print-button:hover{
    opacity: .9;
    cursor: pointer;
  }
  .print-button.disabled:hover{
    opacity: .4;
    cursor: pointer;
  }`]
})

export class PrintButtonComponent implements OnInit {
  @Input() dir: string;
  @Input() disabled = true;
  @Input() colorConfig = new UiCarouselColorConfig();

  @Output() onButtonClick: EventEmitter<any> = new EventEmitter<any>();

  public styling: string;
  public styleElement: any;

  constructor(private _el: ElementRef, private _renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  onClick() {
    if (!this.disabled) {
      this.onButtonClick.emit();
    }
  }
}























