const colors = require('./colors');
const hsl2rgb = require('./hsl2rgb');

// Allow it to be, at most, off by 0.013..., due to JavaScript floating point handling errors.
const ERROR_MARGIN = 132 / 9900;

describe('@charlesstover/hsl2rgb', () => {

  // For each color we want to check,
  for (const color of colors) {

    const [ name, r, g, b, h, s, l ] = color;

    // It should be able to convert the color.
    it('should convert ' + name, () => {

      // Convert the HSL to RGB.
      const rgb = hsl2rgb(h, s, l);

      // Check each R, G, and B.
      let fail = false;
      for (let i = 0; i < 3; i++) {

        
        if (
          rgb[i] < color[i + 1] - ERROR_MARGIN ||
          rgb[i] > color[i + 1] + ERROR_MARGIN
        ) {
          fail = true;
          break;
        }
      }

      // If any of the values were off by more than one, throw an error.
      if (fail) {
        throw new Error(
          'Expected ' + [ r, g, b ].join(', ') + ' / ' +
          'Received: ' + rgb.join(', ')
        );
      }
    });
  }
});
