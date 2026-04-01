import { HEX_STRING_PREFIX, HEX_STRING_LENGTH } from '../../constants/hex.constants';

/**
 * Validates whether a string is a valid hexadecimal color.
 *
 * @param {string} hex - Color in hexadecimal format (e.g., "#FF5733")
 * @returns {boolean} `true` if the string is a valid hexadecimal color, `false` otherwise
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
