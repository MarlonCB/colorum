import { HEX_BASE, HEX_COMPONENT_LENGTH, HEX_PAD_ZERO } from '../constants/hex.constants';

/**
 * Converts a number to a zero-padded two-digit hexadecimal string.
 *
 * @param {number} value - Integer to convert (e.g., 255)
 * @returns {string} Two-character hexadecimal string (e.g., "ff")
 *
 * @example
 * numberToHex(255);
 * // Returns "ff"
 *
 * @example
 * numberToHex(5);
 * // Returns "05"
 */
export const numberToHex = (value: number): string =>
  value.toString(HEX_BASE).padStart(HEX_COMPONENT_LENGTH, HEX_PAD_ZERO);
