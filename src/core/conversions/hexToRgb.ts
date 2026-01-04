/**
 * Convierte un color en formato hexadecimal a RGB
 *
 * @param {string} hex - Color en formato hexadecimal (ej: "#FF5733" o "FF5733")
 * @returns {{ r: number, g: number, b: number, toStringCss: () => string }} Objeto con valores RGB y método para convertir a string CSS
 *
 * @example
 * hexToRgb("#FF5733");
 * // Returns { r: 255, g: 87, b: 51, toStringCss: () => "rgb(255, 87, 51)" }
 */
import {
  HEX_STRING_PREFIX,
  HEX_PREFIX_LENGTH,
  HEX_STRING_LENGTH,
  HEX_RADIX,
  HEX_RED_START,
  HEX_GREEN_START,
  HEX_BLUE_START,
} from '../../constants/hexColor';
import { RGB_STRING_PREFIX } from '../../constants/rgbColor';

export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number; toStringCss: () => string } => {
  // Validar que tenga el símbolo # y sea un hexadecimal válido
  const hexPattern = new RegExp(`^${HEX_STRING_PREFIX}[0-9A-Fa-f]{${HEX_STRING_LENGTH}}$`);
  if (!hexPattern.test(hex)) {
    throw new Error(`Invalid hex color: ${hex}. Must be in format ${HEX_STRING_PREFIX}RRGGBB`);
  }

  const cleanHex = hex.slice(HEX_PREFIX_LENGTH);

  // Convertir hexadecimal a RGB
  const r = parseInt(cleanHex.substring(HEX_RED_START, HEX_GREEN_START), HEX_RADIX);
  const g = parseInt(cleanHex.substring(HEX_GREEN_START, HEX_BLUE_START), HEX_RADIX);
  const b = parseInt(cleanHex.substring(HEX_BLUE_START, HEX_STRING_LENGTH), HEX_RADIX);

  return {
    r,
    g,
    b,
    toStringCss: () => `${RGB_STRING_PREFIX}(${r}, ${g}, ${b})`,
  };
};
