import { HEX_STRING_PREFIX, HEX_STRING_LENGTH } from '../../constants/hexColor';

/**
 * Valida si un string es un color en formato hexadecimal válido.
 *
 * @param {string} hex - Color en formato hexadecimal (ej: "#FF5733")
 * @returns {boolean} `true` si el string es un color hexadecimal válido, `false` en caso contrario
 *
 * @example
 * isHex("#FF5733");
 * // Returns true
 *
 * @example
 * isHex("FF5733");
 * // Returns false
 */

export const isHex = (hex: string): boolean => {
  const hexPattern = new RegExp(`^${HEX_STRING_PREFIX}[0-9A-Fa-f]{${HEX_STRING_LENGTH}}$`);
  return hexPattern.test(hex);
};
