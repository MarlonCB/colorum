/**
 * Validates that an opacity amount is between 0 and 1. Throws if invalid.
 *
 * @param {number} amount - Opacity level to validate
 * @returns {void}
 *
 * @example
 * validateAmount(0.5);
 * // No error
 *
 * @example
 * validateAmount(1.5);
 * // Throws Error
 */
export const validateAmount = (amount: number): void => {
  if (amount < 0 || amount > 1) {
    throw new Error(`Invalid amount: ${amount}. Must be a number between 0 and 1`);
  }
};
