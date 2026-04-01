import {
  HEX_STRING_PREFIX,
  HEX_STRING_LENGTH,
  HEX_BASE,
  HEX_RED_START,
  HEX_GREEN_START,
  HEX_BLUE_START,
} from '../../constants/hex.constants';
import { RGB_STRING_PREFIX } from '../../constants/rgb.constants';
import { HexColor, RGBColor } from '../../types';
import { stripHexPrefix } from '../../helpers';

/**
 * Converts a hexadecimal color to RGB format.
 *
 * @param {HexColor} hex - Color in hexadecimal format (e.g., "#FF5733")
 * @returns {RGBColor} Object with RGB values and a method to convert to a CSS string
 *
 * @example
 * hexToRgb("#FF5733");
 * // Returns { r: 255, g: 87, b: 51, toStringCss: () => "rgb(255, 87, 51)" }
 */
export const hexToRgb = (hex: HexColor): RGBColor => {
  // Validar que tenga el símbolo # y sea un hexadecimal válido
  const hexPattern = new RegExp(`^${HEX_STRING_PREFIX}[0-9A-Fa-f]{${HEX_STRING_LENGTH}}$`);
  if (!hexPattern.test(hex)) {
    throw new Error(`Invalid hex color: ${hex}. Must be in format ${HEX_STRING_PREFIX}RRGGBB`);
  }

  const cleanHex = stripHexPrefix(hex);

  // Convertir hexadecimal a RGB
  const r = parseInt(cleanHex.substring(HEX_RED_START, HEX_GREEN_START), HEX_BASE);
  const g = parseInt(cleanHex.substring(HEX_GREEN_START, HEX_BLUE_START), HEX_BASE);
  const b = parseInt(cleanHex.substring(HEX_BLUE_START, HEX_STRING_LENGTH), HEX_BASE);

  return {
    r,
    g,
    b,
    toStringCss: () => `${RGB_STRING_PREFIX}(${r}, ${g}, ${b})`,
  };
};
