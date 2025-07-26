import {
  HEX_STRING_LENGTH,
  HEX_STRING_PREFIX,
  MAX_HEX_COLOR,
  MIN_HEX_COLOR,
} from '../../constants';
import { getRandomIntInRange } from '../../helpers';

/**
 * Generates a random color in hexadecimal format (e.g., "#a1b2c3").
 *
 * @returns {string} A hexadecimal color string that starts with "#" followed by six hex digits.
 *
 * @example
 * getRandomHex();
 * // Returns "#3e92f4"
 */
export const getRandomHex = (): string => {
  const randomNumber = getRandomIntInRange(MIN_HEX_COLOR, MAX_HEX_COLOR);
  const hexString = randomNumber.toString(16).padStart(HEX_STRING_LENGTH, '0');
  return `${HEX_STRING_PREFIX}${hexString}`;
};
