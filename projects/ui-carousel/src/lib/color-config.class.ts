export class UiCarouselColorConfig {
  public dotsColor?: string;
  public arrowColor?: string;
  public itemBackgroundColor?: string;
  public printButtonBackgroundColor?: string;
  public printButtonFontColor?: string;

  constructor (
    dotsColor?: string,
    arrowColor?: string,
    itemBackgroundColor?: string,
    printButtonBackgroundColor?: string,
    printButtonFontColor?: string
    ) {
    this.dotsColor = dotsColor ? dotsColor : '#F5F5F5';
    this.arrowColor = arrowColor ? arrowColor : '#F5F5F5';
    this.itemBackgroundColor = itemBackgroundColor ? itemBackgroundColor : '#CCCCCC';
    this.printButtonBackgroundColor = printButtonBackgroundColor ? printButtonBackgroundColor : '#3d3d3d';
    this.printButtonFontColor = printButtonFontColor ? printButtonFontColor : '#FFFFFF';
  }
}
