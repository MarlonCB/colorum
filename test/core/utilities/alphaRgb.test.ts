import { alphaRgb } from '../../../src/core';

describe('alphaRgb', () => {
  // Verifica que los cuatro canales del objeto retornado sean correctos
  it('should return correct r, g, b, a values', () => {
    const result = alphaRgb('rgb(255, 87, 51)', 0.5);
    expect(result.r).toBe(255);
    expect(result.g).toBe(87);
    expect(result.b).toBe(51);
    expect(result.a).toBe(0.5);
  });

  // Verifica que toStringCss() produce el formato CSS rgba correcto
  it('should return correct toStringCss()', () => {
    const result = alphaRgb('rgb(255, 87, 51)', 0.5);
    expect(result.toStringCss()).toBe('rgba(255, 87, 51, 0.5)');
  });

  // Valores límite del canal alfa
  it('should handle amount 0 (fully transparent)', () => {
    const result = alphaRgb('rgb(0, 0, 0)', 0);
    expect(result.a).toBe(0);
    expect(result.toStringCss()).toBe('rgba(0, 0, 0, 0)');
  });

  it('should handle amount 1 (fully opaque)', () => {
    const result = alphaRgb('rgb(255, 255, 255)', 1);
    expect(result.a).toBe(1);
    expect(result.toStringCss()).toBe('rgba(255, 255, 255, 1)');
  });

  // Cubre: valor de canal fuera de rango (256) y formato incorrecto (hex)
  it('should throw error for invalid RGB color', () => {
    expect(() => alphaRgb('rgb(256, 0, 0)', 0.5)).toThrow();
    expect(() => alphaRgb('#FF5733', 0.5)).toThrow();
  });

  // El amount debe estar estrictamente entre 0 y 1
  it('should throw error when amount is out of range', () => {
    expect(() => alphaRgb('rgb(255, 87, 51)', -0.1)).toThrow();
    expect(() => alphaRgb('rgb(255, 87, 51)', 1.1)).toThrow();
  });
});
