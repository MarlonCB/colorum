import { RGB_MAX_VALUE, RGB_MIN_VALUE } from '../../../src/constants';
import { getRandomRgb } from '../../../src/core';

describe('getRandomRgb', () => {
  // Verifica que r, g y b sean números dentro del rango válido
  it('should return an object with r, g, b values in the valid RGB range', () => {
    const { r, g, b } = getRandomRgb();

    expect(typeof r).toBe('number');
    expect(typeof g).toBe('number');
    expect(typeof b).toBe('number');

    expect(r).toBeGreaterThanOrEqual(RGB_MIN_VALUE);
    expect(r).toBeLessThanOrEqual(RGB_MAX_VALUE);
    expect(g).toBeGreaterThanOrEqual(RGB_MIN_VALUE);
    expect(g).toBeLessThanOrEqual(RGB_MAX_VALUE);
    expect(b).toBeGreaterThanOrEqual(RGB_MIN_VALUE);
    expect(b).toBeLessThanOrEqual(RGB_MAX_VALUE);
  });

  // Verifica que toCssString retorne un string CSS válido
  it('should return a valid CSS rgb string', () => {
    const color = getRandomRgb();
    const cssString = color.toCssString();

    expect(cssString).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);

    const [r, g, b] = cssString
      .replace('rgb(', '')
      .replace(')', '')
      .split(', ')
      .map(Number);

    expect(r).toBeGreaterThanOrEqual(RGB_MIN_VALUE);
    expect(r).toBeLessThanOrEqual(RGB_MAX_VALUE);
    expect(g).toBeGreaterThanOrEqual(RGB_MIN_VALUE);
    expect(g).toBeLessThanOrEqual(RGB_MAX_VALUE);
    expect(b).toBeGreaterThanOrEqual(RGB_MIN_VALUE);
    expect(b).toBeLessThanOrEqual(RGB_MAX_VALUE);
  });
});
