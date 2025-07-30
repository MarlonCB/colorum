import { RGB_MAX_VALUE, RGB_MIN_VALUE, RGB_STRING_PREFIX } from '../../constants';
import { getRandomIntInRange } from '../../helpers';

/**
 * Generates a random color in RGB format.
 *
 * @returns {{ r: number, g: number, b: number, toCssString: () => string }}
 *
 * @example
 * getRandomRgb();
 * // Returns: { r: 123, g: 45, b: 200, toStringCss: () => "rgb(123, 45, 200)" }
 */
export const getRandomRgb = (): {
  r: number;
  g: number;
  b: number;
  toCssString: () => string;
} => {
  const r = getRandomIntInRange(RGB_MIN_VALUE, RGB_MAX_VALUE);
  const g = getRandomIntInRange(RGB_MIN_VALUE, RGB_MAX_VALUE);
  const b = getRandomIntInRange(RGB_MIN_VALUE, RGB_MAX_VALUE);

  return {
    r,
    g,
    b,
    toCssString: () => `${RGB_STRING_PREFIX}(${r}, ${g}, ${b})`,
  };
};
