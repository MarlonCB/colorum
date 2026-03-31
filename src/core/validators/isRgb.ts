import { RGB_STRING_PREFIX, RGB_MIN_VALUE, RGB_MAX_VALUE } from '../../constants/rgbColor';

/**
 * Valida si un string es un color en formato RGB válido.
 *
 * @param {string} rgb - Color en formato RGB (ej: "rgb(255, 87, 51)")
 * @returns {boolean} `true` si el string es un color RGB válido, `false` en caso contrario
 *
 * @example
 * isRgb("rgb(255, 87, 51)");
 * // Returns true
 *
 * @example
 * isRgb("rgb(256, 0, 0)");
 * // Returns false
 */
export const isRgb = (rgb: string): boolean => {
  const rgbPattern = new RegExp(
    `^${RGB_STRING_PREFIX}\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$`
  );
  const match = rgbPattern.exec(rgb);

  if (!match) return false;

  // El primer elemento del match es el string completo, se omite con la coma inicial
  const [, r, g, b] = match;
  return [r, g, b].every((value) => {
    const num = Number(value);
    return num >= RGB_MIN_VALUE && num <= RGB_MAX_VALUE;
  });
};
