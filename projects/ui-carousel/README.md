# ngx-ui-carousel 

✨  Carousel component for angular 4+

## 💥 Features :
- 😈 No third party library
- 😎 Easy to use API

## Install
``` npm install ngx-ui-carousel ```

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

Inputs           | Type                           | Description                                                  
---------------- | ------------------------------ | -----------                                           
`infinite`       | `boolean`                      | Infinite carousel                     
`isArrowsVisible`| `boolean`                      | Show/hide Arrows                                                            
`isDotsVisible`  | `boolean`                      | Show/hide Dots       
`speed`          | `number`                       | Transition Speed (ms)       
`fade`           | `bool`                         | Enable fade mode                                                             
`height`         | `string`                       | Height of the carousel (in px or %)             
`width`          | `string`                       | Width of the carousel (in px or %)
`autoPlay`       | `bool`                         | Enable autoscroll of items                                                             
`autoPlaySpeed`  | `number`                       | Timeout (ms) of automatic scrolling     
`colorConfig`    | `UiCarouselColorConfig`        | Colors config for all components within the carousel (dots, items, arrows). Defaults have been set.

## Contribute

To contribute you can either fork or make a pull request to this repository.

After cloning, the code can be found in: `projects/ui-carousel/src/lib/*`, run `npm install && npm start` to start developing!

When your done making changes you can build the library using `npm build-lib`

Repository Url: <https://github.com/sjstreur/ui-carousel> 

## Credits

Credits to bougarfaoui (<https://github.com/bougarfaoui/>) for the original code. I reused it and modified it somewhat to my own liking.

### Licence

MIT
