# hsl2rgb
Convert HSL to RGB.

![GitHub version](https://img.shields.io/github/package-json/v/CharlesStover/hsl2rgb-js.svg)
![npm version](https://img.shields.io/npm/v/@charlesstover/hsl2rgb.svg)
![npm downloads](https://img.shields.io/npm/dt/@charlesstover/hsl2rgb.svg)
![min](https://img.shields.io/bundlephobia/min/@charlesstover/hsl2rgb.svg)
![minzip](https://img.shields.io/bundlephobia/minzip/@charlesstover/hsl2rgb.svg)

## Install
* `npm install @charlesstover/hsl2rgb --save` or
* `yarn add @charlesstover/hsl2rgb`

## Test
`npm test`

## Use
```JS
import hsl2rgb from '@charlesstover/hsl2rgb';

const [ r, g, b ] = hsl2rgb(0, 1, 0.5);
console.log(r); // 1
console.log(g); // 0
console.log(b); // 0

const css = (h, s, l) => 'rgb(' + hsl2rgb(h, s, l).map((x) => x * 255).join(', ') + ')';

console.log(css(0.5, 1, 0.5)); // rgb(0, 255, 0)
```

## Parameters
* hue: number
  The hue, from 0 to 1.

* saturation: number
  The saturation, from 0 to 1.
  Zero is black and white; one is full color.

* lightness: number
  The lightness, from 0 to 1.
  Zero is black. One half is full color. One is white.

## Return Value
This function returns an array of three numbers: red, green, and blue.
Each is a _decimal_ value from 0 to 1.

## See also
For example colors and their HSL and RGB equivalents, check out the [X11 color name chart](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart).
