export class UiCarouselColorConfig {
  public dotsColor?: string;
  public arrowColor?: string;
  public itemBackgroundColor?: string;

  constructor (dotsColor?: string, arrowColor?: string, itemBackgroundColor?: string) {
    this.dotsColor = dotsColor ? dotsColor : '#F5F5F5';
    this.arrowColor = arrowColor ? arrowColor : '#F5F5F5';
    this.itemBackgroundColor = itemBackgroundColor ? itemBackgroundColor : '#ccccc';
  }
}
