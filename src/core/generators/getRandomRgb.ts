import { RGB_MAX_VALUE, RGB_MIN_VALUE, RGB_STRING_PREFIX } from '../../constants';
import { getRandomIntInRange } from '../../helpers';
import { RGBColor } from '../../types';

/**
 * Generates a random color in RGB format.
 *
 * @returns {RGBColor}
 *
 * @example
 * getRandomRgb();
 * // Returns: { r: 123, g: 45, b: 200, toStringCss: () => "rgb(123, 45, 200)" }
 */
export const getRandomRgb = (): RGBColor => {
  const r = getRandomIntInRange(RGB_MIN_VALUE, RGB_MAX_VALUE);
  const g = getRandomIntInRange(RGB_MIN_VALUE, RGB_MAX_VALUE);
  const b = getRandomIntInRange(RGB_MIN_VALUE, RGB_MAX_VALUE);

  return {
    r,
    g,
    b,
    toStringCss: () => `${RGB_STRING_PREFIX}(${r}, ${g}, ${b})`,
  };
};
