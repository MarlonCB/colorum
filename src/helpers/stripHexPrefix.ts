import { HEX_PREFIX_LENGTH } from '../constants/hex.constants';

/**
 * Removes the leading "#" prefix from a hexadecimal color string.
 *
 * @param {string} hex - Hexadecimal color string with prefix (e.g., "#FF5733")
 * @returns {string} Hexadecimal string without prefix (e.g., "FF5733")
 *
 * @example
 * stripHexPrefix("#FF5733");
 * // Returns "FF5733"
 */
export const stripHexPrefix = (hex: string): string => hex.slice(HEX_PREFIX_LENGTH);
