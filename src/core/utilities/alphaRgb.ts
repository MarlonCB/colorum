import { RGB_STRING_PREFIX, RGBA_STRING_PREFIX } from '../../constants/rgbColor';
import { isRgb } from '../validators/isRgb';

/**
 * Agrega transparencia a un color en formato RGB, retornando un objeto con los valores de cada canal y toStringCss().
 *
 * @param {string} rgb - Color en formato RGB (ej: "rgb(255, 87, 51)")
 * @param {number} amount - Nivel de opacidad entre 0 (transparente) y 1 (opaco)
 * @returns {{ r: number, g: number, b: number, a: number, toStringCss: () => string }} Objeto con valores RGBA y método para convertir a string CSS
 *
 * @example
 * alphaRgb("rgb(255, 87, 51)", 0.5);
 * // Returns { r: 255, g: 87, b: 51, a: 0.5, toStringCss: () => "rgba(255, 87, 51, 0.5)" }
 */
export const alphaRgb = (
  rgb: string,
  amount: number
): { r: number; g: number; b: number; a: number; toStringCss: () => string } => {
  if (!isRgb(rgb)) {
    throw new Error(`Invalid RGB color: ${rgb}. Must be in format ${RGB_STRING_PREFIX}(r, g, b)`);
  }

  if (amount < 0 || amount > 1) {
    throw new Error(`Invalid amount: ${amount}. Must be a number between 0 and 1`);
  }

  const match = rgb.match(/\d+/g)!;
  const r = Number(match[0]);
  const g = Number(match[1]);
  const b = Number(match[2]);
  const a = amount;

  return {
    r,
    g,
    b,
    a,
    toStringCss: () => `${RGBA_STRING_PREFIX}(${r}, ${g}, ${b}, ${a})`,
  };
};
