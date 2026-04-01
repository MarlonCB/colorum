import { RGB_STRING_PREFIX, RGBA_STRING_PREFIX } from '../../constants/rgb.constants';
import { isRgb } from '../validators/isRgb';
import { RGBAColor } from '../../types';

/**
 * Adds transparency to an RGB color, returning an object with each channel value and toStringCss().
 *
 * @param {string} rgb - Color in RGB format (e.g., "rgb(255, 87, 51)")
 * @param {number} amount - Opacity level between 0 (transparent) and 1 (opaque)
 * @returns {RGBAColor} Object with RGBA values and a method to convert to a CSS string
 *
 * @example
 * alphaRgb("rgb(255, 87, 51)", 0.5);
 * // Returns { r: 255, g: 87, b: 51, a: 0.5, toStringCss: () => "rgba(255, 87, 51, 0.5)" }
 */
export const alphaRgb = (rgb: string, amount: number): RGBAColor => {
  if (!isRgb(rgb)) {
    throw new Error(`Invalid RGB color: ${rgb}. Must be in format ${RGB_STRING_PREFIX}(r, g, b)`);
  }

  if (amount < 0 || amount > 1) {
    throw new Error(`Invalid amount: ${amount}. Must be a number between 0 and 1`);
  }

  // Es seguro usar ! porque isRgb() ya garantizó que el formato es válido
  const match = rgb.match(/\d+/g)!;
  const r = Number(match[0]);
  const g = Number(match[1]);
  const b = Number(match[2]);
  const a = amount;

  return {
    r,
    g,
    b,
    a,
    toStringCss: () => `${RGBA_STRING_PREFIX}(${r}, ${g}, ${b}, ${a})`,
  };
};
