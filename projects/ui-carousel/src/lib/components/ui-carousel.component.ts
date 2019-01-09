import {
  Component, OnInit, Output, EventEmitter,
  Input, ContentChildren, QueryList, ElementRef,
  HostListener, AfterViewInit
} from '@angular/core';
import { UiCarouselItemComponent } from './ui-carousel-item.component';
import { UiCarouselColorConfig } from '../color-config.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-ui-carousel',
  template: `
    <div (mouseenter)="(autoPlay)?autoPlayFunction(false):null" (mouseleave)="(autoPlay)?autoPlayFunction(true):null">
      <ng-content></ng-content>
      <dots
        *ngIf="isDotsVisible"
        [dotsCount]="items.length"
        position="middle"
        [activeDot]="currentItemIndex"
        [colorConfig]="colorConfig"
        (onClick)="goTo($event)"></dots>
      <arrow *ngIf="isArrowsVisible" dir="left" (onArrowClick)="prev()" [disabled]="false" [colorConfig]="colorConfig"></arrow>
      <arrow *ngIf="isArrowsVisible" dir="right" (onArrowClick)="next()" [disabled]="false" [colorConfig]="colorConfig"></arrow>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      overflow: hidden;
      position: relative;
    }
  `],
})
export class UiCarouselComponent implements OnInit, AfterViewInit {
  @Input() height = '300px';
  @Input() width = '100%';
  @Input() speed: number;
  @Input() autoPlay = true;
  @Input() autoPlaySpeed: number;
  @Input() infinite = true;
  @Input() fade = false;
  @Input() isDotsVisible = true;
  @Input() isArrowsVisible = true;
  @Input() colorConfig = new UiCarouselColorConfig();

  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

  @ContentChildren(UiCarouselItemComponent) items: QueryList<UiCarouselItemComponent>;

  public currentItemIndex = 0;
  public interval: any;

  private _width: number;
  private firstItemIndex: number; // the visual index of item and not necessary the index in the DOM
  private lastItemIndex: number; // ..
  private isSliding: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.speed = this.speed || 500;
    this.autoPlaySpeed = this.autoPlaySpeed || 1500;
    if (this.autoPlay) {
      this.autoPlayFunction(true);
    }
  }

  ngAfterViewInit() {
    this.el.nativeElement.style.height = this.height;
    this.el.nativeElement.style.width = this.width;
    if (this.items && this.items.length > 0) {
      this.onChange.emit(0);
      this._width = this.items.first.el.nativeElement.offsetWidth;
    }
    this.firstItemIndex = 0;
    this.lastItemIndex = this.items.length - 1;
    if (!this.fade) {
      this.items.toArray().forEach((item, itemIndex) => {
        item.speed = this.speed;
        item.position = this._width * itemIndex;
        item.currentPosition = item.position;
        item.disableTransition();
        item.moveTo(item.position);
      });
    } else {
      this.items.forEach((item, index) => {
        item.zIndex = this.items.length - index;
        item.setzIndex(item.zIndex);
      });
    }
    setTimeout(() => {
      this.items.forEach(item => {
        item.colorConfig = this.colorConfig;
      });
    }, 50);
  }

  next() {
    this.slideRight();
  }

  prev() {
    this.slideLeft();
  }

  goTo(index: number) {
    if (!this.fade) {
      this.slideTo(index);
    } else {
      this.fadeTo(index);
    }
  }

  rotateRightTo(index: number) {
    while (index !== this.lastItemIndex) {
      this.rotateRight();
    }
  }

  rotateLeftTo(index: number) {
    while (index !== this.firstItemIndex) {
      this.rotateLeft();
    }
  }

  slideTo(index: number) {
    this.onChange.emit((index + this.items.length) % this.items.length);
    const steps = this.currentItemIndex - index;
    if (this.infinite) {
      if (steps > 0) {
        this.rotateRightTo(this.currentItemIndex);
      } else if (steps < 0) {
        this.rotateLeftTo(this.currentItemIndex);
      }
    }
    setTimeout(() => {
      this.enableTransition();
      this.items.forEach((item, i) => {
        item.position += this._width * (steps);
        item.currentPosition = item.position;
        item.moveTo(item.position);
      });
      this.currentItemIndex = (index + this.items.length) % this.items.length;
    }, 50);
  }

  slideLeft() {
    if (!this.isSliding) {
      this.isSliding = true;
      if (!this.infinite) {
        if (this.currentItemIndex === 0) {
          this.slideToPrevPosition();
          return;
        }
      }
      this.slideTo(this.currentItemIndex - 1);
      setTimeout(() => {
        this.isSliding = false;
      }, this.speed);
    }
  }

  slideRight() {
    if (!this.isSliding) {
      this.isSliding = true;
      if (!this.infinite) {
        if (this.currentItemIndex === this.items.length - 1) {
          this.slideToPrevPosition();
          return;
        }
      }
      this.slideTo(this.currentItemIndex + 1);
      setTimeout(() => {
        this.isSliding = false;
      }, this.speed);
    }
  }

  slideToPrevPosition() {
    this.enableTransition();
    this.items.forEach(item => {
      item.currentPosition = item.position;
      item.moveTo(item.position);
    });
  }

  disableTransition() {
    this.items.forEach((item, index) => {
      item.disableTransition();
    });
  }

  enableTransition() {
    this.items.forEach((item, index) => {
      item.enableTransition();
    });
  }

  getItemByIndex(index: number) {
    return this.items.find((item, i) => {
      return i === index;
    });
  }

  getIndexByItem(item: UiCarouselItemComponent) {
    return this.items.toArray().indexOf(item);
  }

  rotateRightNTimes(n: number) {
    for (let i = 0; i < n; i++) {
      this.rotateRight();
    }
  }

  rotateLeftNTimes(n: number) {
    for (let i = 0; i < n; i++) {
      this.rotateLeft();
    }
  }

  rotateRight() {
    const firstItemRef = this.getItemByIndex(this.firstItemIndex);
    const lastItemRef = this.getItemByIndex(this.lastItemIndex);

    if (!this.fade) {
      lastItemRef.position = firstItemRef.position - this._width;
      lastItemRef.currentPosition = lastItemRef.position;
      lastItemRef.disableTransition();
      lastItemRef.moveTo(lastItemRef.position);
      this.firstItemIndex = this.lastItemIndex;
      this.lastItemIndex = (this.lastItemIndex - 1 + this.items.length) % this.items.length;
    }
  }

  rotateLeft() {
    const firstItemRef = this.getItemByIndex(this.firstItemIndex);
    const lastItemRef = this.getItemByIndex(this.lastItemIndex);
    firstItemRef.position = lastItemRef.position + this._width;
    firstItemRef.currentPosition = firstItemRef.position;
    firstItemRef.disableTransition();
    firstItemRef.moveTo(firstItemRef.position);
    this.lastItemIndex = this.firstItemIndex;
    this.firstItemIndex = (this.lastItemIndex + 1) % this.items.length;
  }

  fadeTo(index: number) {
    this.onChange.emit(index);
    const firstItem = this.getItemByIndex(this.currentItemIndex);
    const targetItem = this.getItemByIndex(index);
    const highestZIndex = this.items.length;
    targetItem.zIndex = firstItem.zIndex + 1;
    targetItem.setzIndex(targetItem.zIndex);
    targetItem.disableTransition();
    targetItem.fadeIn(this.speed);
    this.currentItemIndex = index;
  }

  fadeRight() {
    const newIndex = (this.currentItemIndex + 1) % this.items.length;
    this.fadeTo(newIndex);
    this.currentItemIndex = newIndex;
  }

  fadeLeft() {
    const newIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length;
    this.fadeTo(newIndex);
    this.currentItemIndex = newIndex;
  }

  // is item first visually and not necessary first in the dom (QueryList)
  isItemFirst(index: number) {
    return this.firstItemIndex === index;
  }

  // is item last visually and not necessary last in the dom (QueryList)
  isItemLast(index: number) {
    return this.lastItemIndex === index;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.rePosition();
  }

  rePosition() {
    const items = this.items.toArray();

    if (this.items && this.items.length > 0) {
      this._width = this.items.first.el.nativeElement.offsetWidth;
    }

    items.sort((item1, item2) => {
      if (item1.position > item2.position) {
        return 1;
      } else if (item1.position < item2.position) {
        return -1;
      } else {
        return 0;
      }
    });

    const currentItem = this.getItemByIndex(this.currentItemIndex);
    const currentItemIndex = items.indexOf(currentItem);
    for (let i = currentItemIndex; i < items.length + currentItemIndex; i++) {
      const item = items[(i + items.length) % items.length];
      item.position = ((i + items.length) % items.length - currentItemIndex) * this._width;
      item.disableTransition();
      item.moveTo(item.position);
    }
  }

  autoPlayFunction(shouldAutoPlay: boolean) {
    if (this.autoPlay) {
      if (shouldAutoPlay) {
        this.interval = setInterval(() => {
          this.next();
        }, this.autoPlaySpeed);
      } else {
        clearInterval(this.interval);
      }
    }
  }
}

