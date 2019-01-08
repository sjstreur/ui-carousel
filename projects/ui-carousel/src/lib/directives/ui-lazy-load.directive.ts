import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libUiLazyLoad]',
  exportAs: 'ui-lazy-load'
})
export class UILazyloadDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('imgUrl') private imgUrl: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public load() {
      const img = this.el.nativeElement;
      if (img.src) {
        return;
      }
      img.src = this.imgUrl;
  }
}
