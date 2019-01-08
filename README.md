# 🌀ui-carousel 

✨  Carousel component for angular 4 and 5

## 💥 Features :
- ⚡️ Image lazy loading
- 😈 No third party library
- 😎 Easy to use API
## Install
``` npm install ngx-ui-carousel --save ```

## Example :
```html
    <ui-carousel [infinite]="true" [fade]="false" [speed]="200" >
        <ui-carousel-item *ngFor="let item of items">
            <img [ui-lazy-load]="item.img">
        </ui-carousel-item>
    </ui-carousel>
```
## API

Inputs           | Type            | Description                                                  
---------------- | --------------- | -----------                                           
`infinite`       | `boolean`       | Infinite carousel                     
`isArrowsVisible`| `boolean`       | Show/hide Arrows                                                            
`isDotsVisible`  | `boolean`       | Show/hide Dots       
`speed`          | `number`        | Speed (in milliseconds)       
`fade`           | `bool`          | Enable fade mode                                                             
`height`         | `string`        | Height of the carousel (in px or %)             
`width`          | `string`        | Width of the carousel (in px or %)

## Contribute

To contribute you can either fork or make a pull request to this repository.

After cloning, the code can be found in: `projects/ui-carousel/src/lib/*`, run `npm install && npm start` to start developing!

When your done making changes you can build the library using `npm build-lib`

## Credits

Credits to bougarfaoui (https://github.com/bougarfaoui/) for the original code. I reused it and modified it somewhat to my own liking.

### Licence

MIT
