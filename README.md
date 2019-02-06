# HSL to RGB [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Work%20with%20colors?%20Simplify%20your%20code%20base.%20You%20can%20use%20hsl2rgb%20to%20easily%20convert%20HSL%20to%20RGB%20values.&url=https://github.com/CharlesStover/hsl2rgb-js&via=CharlesStover&hashtags=javascript,programming,webdev,webdeveloper,webdevelopment)

Convert HSL to RGB.

[![version](https://img.shields.io/npm/v/@charlesstover/hsl2rgb.svg)](https://www.npmjs.com/package/@charlesstover/hsl2rgb)
[![minified size](https://img.shields.io/bundlephobia/min/@charlesstover/hsl2rgb.svg)](https://www.npmjs.com/package/@charlesstover/hsl2rgb)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@charlesstover/hsl2rgb.svg)](https://www.npmjs.com/package/@charlesstover/hsl2rgb)
[![downloads](https://img.shields.io/npm/dt/@charlesstover/hsl2rgb.svg)](https://www.npmjs.com/package/@charlesstover/hsl2rgb)
[![build](https://travis-ci.com/CharlesStover/hsl2rgb-js.svg)](https://travis-ci.com/CharlesStover/hsl2rgb-js/)

## Install

* `npm install @charlesstover/hsl2rgb --save` or
* `yarn add @charlesstover/hsl2rgb`

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
