import {
  HEX_BASE,
  HEX_COMPONENT_LENGTH,
  HEX_PAD_ZERO,
  HEX_STRING_PREFIX,
} from '../../constants/hexColor';
import { RGB_MAX_VALUE } from '../../constants/rgbColor';
import { isHex } from '../validators/isHex';

/**
 * Agrega transparencia a un color en formato hexadecimal, convirtiéndolo de #RRGGBB a #RRGGBBAA.
 *
 * @param {string} hex - Color en formato hexadecimal (ej: "#FF5733")
 * @param {number} amount - Nivel de opacidad entre 0 (transparente) y 1 (opaco)
 * @returns {string} Color hexadecimal con canal alfa (ej: "#FF573380")
 *
 * @example
 * alphaHex("#FF5733", 0.5);
 * // Returns "#FF573380"
 *
 * @example
 * alphaHex("#000000", 0);
 * // Returns "#00000000"
 */
export const alphaHex = (hex: string, amount: number): string => {
  if (!isHex(hex)) {
    throw new Error(`Invalid hex color: ${hex}. Must be in format ${HEX_STRING_PREFIX}RRGGBB`);
  }

  if (amount < 0 || amount > 1) {
    throw new Error(`Invalid amount: ${amount}. Must be a number between 0 and 1`);
  }

  // Convierte la opacidad (0-1) a su equivalente en el rango 0-255 y luego a hex
  const alphaHexValue = Math.round(amount * RGB_MAX_VALUE)
    .toString(HEX_BASE)
    .padStart(HEX_COMPONENT_LENGTH, HEX_PAD_ZERO)
    .toUpperCase();

  return `${hex}${alphaHexValue}`;
};
