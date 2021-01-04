# ngx-ui-carousel 

✨  Carousel component for angular 4+

## 💥 Features :
- 😈 No third party library
- 😎 Easy to use API

## Install
``` npm install ngx-ui-carousel ```

For angular version < 7 use 1.3.4
For angular version 8 use latest

## Example :
```html
  <ngx-ui-carousel [infinite]="true" [fade]="false" [speed]="200">
      <ngx-ui-carousel-item>
        <p>Content here</p>
      </ngx-ui-carousel-item>
      <ngx-ui-carousel-item>
        <p>Content here</p>
      </ngx-ui-carousel-item>
  </ngx-ui-carousel>
```
## API

Inputs                 | Type                           | Description                                                  
-----------------------| ------------------------------ | -----------                                           
`infinite`             | `boolean`                      | Infinite carousel                     
`isArrowsVisible`      | `boolean`                      | Show/hide Arrows                                                            
`isDotsVisible`        | `boolean`                      | Show/hide Dots       
`speed`                | `number`                       | Transition Speed (ms)       
`fade`                 | `bool`                         | Enable fade mode                                                             
`height`               | `string`                       | Height of the carousel (in px or %)             
`width`                | `string`                       | Width of the carousel (in px or %)
`autoPlay`             | `bool`                         | Enable autoscroll of items                                                             
`autoPlaySpeed`        | `number`                       | Timeout (ms) of automatic scrolling     
`colorConfig`          | `UiCarouselColorConfig`        | Colors config for all components within the carousel (dots, items, arrows, print button). Defaults have been set.
`colorConfig`          | `UiCarouselColorConfig`        | Colors config for all components within the carousel (dots, items, arrows, print button). Defaults have been set.
`isPrintButtonVisible` | `bool`                         | Show/hide print button (default: false)

Ouputs           | Type                           | Description                                                  
---------------- | ------------------------------ | -----------  
`printRequest`   | `NativeElement`                | Returns the currently shown carouselitem as a NativeElement

## Contribute

To contribute you can either fork or make a pull request to this repository.

After cloning, the code can be found in: `projects/ui-carousel/src/lib/*`, run `npm install && npm start` to start developing!

When your done making changes you can build the library using `npm build-lib`

Repository Url: <https://github.com/sjstreur/ui-carousel> 

## Credits

Credits to bougarfaoui (<https://github.com/bougarfaoui/>) for the original code. I reused it and modified it somewhat to my own liking.

### Licence

MIT
