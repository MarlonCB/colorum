import { INCLUSIVE_RANGE_OFFSET } from '../constants/math.constants';

/**
 * Returns a random integer between min and max, inclusive.
 *
 * @param {number} min - Lower bound (inclusive)
 * @param {number} max - Upper bound (inclusive)
 * @returns {number} Random integer within the given range
 *
 * @example
 * getRandomIntInRange(0, 255);
 * // Returns a number between 0 and 255
 */
export const getRandomIntInRange = (min: number, max: number): number => {
  // +1 hace que el rango sea inclusivo en ambos extremos (min y max pueden ser generados)
  return Math.floor(Math.random() * (max - min + INCLUSIVE_RANGE_OFFSET)) + min;
};
