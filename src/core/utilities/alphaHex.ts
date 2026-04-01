import { HEX_STRING_PREFIX } from '../../constants/hex.constants';
import { RGB_MAX_VALUE } from '../../constants/rgb.constants';
import { isHex } from '../validators/isHex';
import { HexColor } from '../../types';
import { numberToHex, validateAmount } from '../../helpers';

/**
 * Adds transparency to a hexadecimal color, converting it from #RRGGBB to #RRGGBBAA.
 *
 * @param {HexColor} hex - Color in hexadecimal format (e.g., "#FF5733")
 * @param {number} amount - Opacity level between 0 (transparent) and 1 (opaque)
 * @returns {string} Hexadecimal color with alpha channel (e.g., "#FF573380")
 *
 * @example
 * alphaHex("#FF5733", 0.5);
 * // Returns "#FF573380"
 *
 * @example
 * alphaHex("#000000", 0);
 * // Returns "#00000000"
 */
export const alphaHex = (hex: HexColor, amount: number): string => {
  if (!isHex(hex)) {
    throw new Error(`Invalid hex color: ${hex}. Must be in format ${HEX_STRING_PREFIX}RRGGBB`);
  }

  validateAmount(amount);

  // Convierte la opacidad (0-1) a su equivalente en el rango 0-255 y luego a hex
  const alphaHexValue = numberToHex(Math.round(amount * RGB_MAX_VALUE)).toUpperCase();

  return `${hex}${alphaHexValue}`;
};
