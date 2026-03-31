import { alphaHex } from '../../../src/core';

describe('alphaHex', () => {
  // 1 * 255 = 255 → FF
  it('should return fully opaque hex when amount is 1', () => {
    expect(alphaHex('#FF5733', 1)).toBe('#FF5733FF');
  });

  // 0 * 255 = 0 → 00
  it('should return fully transparent hex when amount is 0', () => {
    expect(alphaHex('#FF5733', 0)).toBe('#FF573300');
  });

  // 0.5 * 255 = 127.5 → Math.round → 128 → 80 en hex
  it('should return correct alpha for amount 0.5', () => {
    expect(alphaHex('#FF5733', 0.5)).toBe('#FF573380');
  });

  // Valores límite del espectro
  it('should handle black color', () => {
    expect(alphaHex('#000000', 0.5)).toBe('#00000080');
  });

  it('should handle white color', () => {
    expect(alphaHex('#FFFFFF', 1)).toBe('#FFFFFFFF');
  });

  // Casos inválidos de entrada hex
  it('should throw error for invalid hex color', () => {
    expect(() => alphaHex('FF5733', 0.5)).toThrow();
    expect(() => alphaHex('#FFF', 0.5)).toThrow();
  });

  // El amount debe estar estrictamente entre 0 y 1
  it('should throw error when amount is out of range', () => {
    expect(() => alphaHex('#FF5733', -0.1)).toThrow();
    expect(() => alphaHex('#FF5733', 1.1)).toThrow();
  });
});
