import {
  HEX_BASE,
  HEX_BLUE_START,
  HEX_COMPONENT_LENGTH,
  HEX_GREEN_START,
  HEX_PAD_ZERO,
  HEX_PREFIX_LENGTH,
  HEX_RED_START,
  HEX_STRING_LENGTH,
  HEX_STRING_PREFIX,
} from '../../constants/hex.constants';
import { isHex } from '../validators/isHex';
import { HexColor } from '../../types';

/**
 * Converts a hexadecimal color to grayscale using the luminance formula:
 * Y = (R × 0.299) + (G × 0.587) + (B × 0.114), then assigns Y to each RGB channel.
 *
 * @param {HexColor} color - Color in hexadecimal format (e.g., "#FF5733")
 * @returns {string} Grayscale hexadecimal color (e.g., "#626262")
 *
 * @example
 * grayscale("#FF5733");
 * // Returns "#626262"
 *
 * @example
 * grayscale("#FFFFFF");
 * // Returns "#FFFFFF"
 */
export const grayscale = (color: HexColor): string => {
  if (!isHex(color)) {
    throw new Error(`Invalid hex color: ${color}. Must be in format ${HEX_STRING_PREFIX}RRGGBB`);
  }

  const cleanHex = color.slice(HEX_PREFIX_LENGTH);

  const r = parseInt(cleanHex.substring(HEX_RED_START, HEX_GREEN_START), HEX_BASE);
  const g = parseInt(cleanHex.substring(HEX_GREEN_START, HEX_BLUE_START), HEX_BASE);
  const b = parseInt(cleanHex.substring(HEX_BLUE_START, HEX_STRING_LENGTH), HEX_BASE);

  const y = Math.round(r * 0.299 + g * 0.587 + b * 0.114);

  const toHex = (value: number): string =>
    value.toString(HEX_BASE).padStart(HEX_COMPONENT_LENGTH, HEX_PAD_ZERO);

  return `${HEX_STRING_PREFIX}${toHex(y)}${toHex(y)}${toHex(y)}`.toUpperCase();
};
