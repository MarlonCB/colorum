import {
  HEX_BASE,
  HEX_BLUE_START,
  HEX_GREEN_START,
  HEX_RED_START,
  HEX_STRING_LENGTH,
  HEX_STRING_PREFIX,
} from '../../constants/hex.constants';
import { isHex } from '../validators/isHex';
import { HexColor } from '../../types';
import { numberToHex, stripHexPrefix } from '../../helpers';

/**
 * Inverts a hexadecimal color by subtracting each RGB component from 255 (R' = 255 - R, G' = 255 - G, B' = 255 - B).
 *
 * @param {HexColor} hex - Color in hexadecimal format (e.g., "#FF5733")
 * @returns {string} Inverted hexadecimal color (e.g., "#00A8CC")
 *
 * @example
 * invert("#FF5733");
 * // Returns "#00A8CC"
 *
 * @example
 * invert("#000000");
 * // Returns "#FFFFFF"
 */
export const invert = (hex: HexColor): string => {
  if (!isHex(hex)) {
    throw new Error(`Invalid hex color: ${hex}. Must be in format ${HEX_STRING_PREFIX}RRGGBB`);
  }

  const cleanHex = stripHexPrefix(hex);

  // Extraer cada componente y restar de 255 para obtener el valor invertido
  const r = 255 - parseInt(cleanHex.substring(HEX_RED_START, HEX_GREEN_START), HEX_BASE);
  const g = 255 - parseInt(cleanHex.substring(HEX_GREEN_START, HEX_BLUE_START), HEX_BASE);
  const b = 255 - parseInt(cleanHex.substring(HEX_BLUE_START, HEX_STRING_LENGTH), HEX_BASE);

  return `${HEX_STRING_PREFIX}${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`.toUpperCase();
};
