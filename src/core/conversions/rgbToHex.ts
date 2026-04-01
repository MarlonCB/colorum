import { HEX_STRING_PREFIX } from '../../constants/hex.constants';
import { numberToHex } from '../../helpers';

/**
 * Converts an RGB color to hexadecimal format
 *
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} Hexadecimal color string (e.g., "#883AF1")
 *
 * @example
 * rgbToHex(136, 58, 241);
 * // Returns "#883AF1"
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
  const validateComponent = (name: string, value: number) => {
    if (typeof value !== 'number' || !Number.isInteger(value) || value < 0 || value > 255) {
      throw new Error(`${name} must be an integer between 0 and 255`);
    }
  };

  validateComponent('r', r);
  validateComponent('g', g);
  validateComponent('b', b);

  return `${HEX_STRING_PREFIX}${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`.toUpperCase();
};
