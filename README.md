# colorum

A lightweight TypeScript color utility library with zero runtime dependencies. Provides functions for color conversion, validation, manipulation, and generation.

## Installation

```bash
npm install colorum
```

## Usage

```ts
import { hexToRgb, rgbToHex, isHex, getRandomHex } from 'colorum';
```

## API

### Conversions

#### `hexToRgb(hex)`

Converts a hex color to an RGB object.

```ts
hexToRgb('#FF5733');
// { r: 255, g: 87, b: 51, toStringCss: () => "rgb(255, 87, 51)" }
```

#### `rgbToHex(r, g, b)`

Converts RGB values to a hex string.

```ts
rgbToHex(136, 58, 241);
// "#883AF1"
```

---

### Validators

#### `isHex(value)`

Returns `true` if the string is a valid `#RRGGBB` hex color.

```ts
isHex('#FF5733'); // true
isHex('FF5733');  // false
```

#### `isRgb(value)`

Returns `true` if the string is a valid `rgb(r, g, b)` color.

```ts
isRgb('rgb(255, 87, 51)'); // true
isRgb('rgb(256, 0, 0)');   // false
```

---

### Generators

#### `getRandomHex()`

Returns a random hex color string.

```ts
getRandomHex(); // "#3e92f4"
```

#### `getRandomRgb()`

Returns a random RGB color object.

```ts
getRandomRgb();
// { r: 123, g: 45, b: 200, toStringCss: () => "rgb(123, 45, 200)" }
```

---

### Manipulators

#### `invert(hex)`

Inverts a hex color (`R' = 255 - R`, etc.).

```ts
invert('#FF5733'); // "#00A8CC"
invert('#000000'); // "#FFFFFF"
```

#### `grayscale(hex)`

Converts a hex color to grayscale using the luminance formula `Y = R×0.299 + G×0.587 + B×0.114`.

```ts
grayscale('#FF5733'); // "#858585"
grayscale('#FFFFFF'); // "#FFFFFF"
```

---

### Utilities

#### `alphaHex(hex, amount)`

Adds an alpha channel to a hex color. `amount` is a value between `0` (transparent) and `1` (opaque).

```ts
alphaHex('#FF5733', 0.5); // "#FF573380"
alphaHex('#000000', 0);   // "#00000000"
```

#### `alphaRgb(rgb, amount)`

Adds transparency to an RGB color string, returning an RGBA object.

```ts
alphaRgb('rgb(255, 87, 51)', 0.5);
// { r: 255, g: 87, b: 51, a: 0.5, toStringCss: () => "rgba(255, 87, 51, 0.5)" }
```

---

## License

[MIT](LICENSE)
