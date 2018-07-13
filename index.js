var ONE_SIXTH = 1 / 6;
var ONE_THIRD = 1 / 3;
var TWO_THIRDS = 2 / 3;

var hue2rgb = function(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t-= 1;
  }
  if (t < ONE_SIXTH) {
    return p + (q - p) * 6 * t;
  }
  if (t < 0.5) {
    return q;
  }
  if (t < TWO_THIRDS) {
    return p + (q - p) * (TWO_THIRDS - t) * 6;
  }
  return p;
};

var hsl2rgb = function(h, s, l) {
  if (s === 0) {
    return new Array(3).fill(function(x) {
      return Math.round(x * 255);
    });
  }
  var q =
    l < 0.5 ?
      l * s + l :
      l + s - l * s;
  var p = 2 * l - q;
  var h2 = h / 255;
  return [
    Math.round(hue2rgb(p, q, h2 + ONE_THIRD) * 255),
    Math.round(hue2rgb(p, q, h2) * 255),
    Math.round(hue2rgb(p, q, h2 - ONE_THIRD) * 255),
  ];
}

hsl2rgb.default = hsl2rgb;

module.exports = hsl2rgb;
