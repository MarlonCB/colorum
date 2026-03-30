import { alphaHex } from '../../../src/core';

describe('alphaHex', () => {
  it('should return fully opaque hex when amount is 1', () => {
    expect(alphaHex('#FF5733', 1)).toBe('#FF5733FF');
  });

  it('should return fully transparent hex when amount is 0', () => {
    expect(alphaHex('#FF5733', 0)).toBe('#FF573300');
  });

  it('should return correct alpha for amount 0.5', () => {
    expect(alphaHex('#FF5733', 0.5)).toBe('#FF573380');
  });

  it('should handle black color', () => {
    expect(alphaHex('#000000', 0.5)).toBe('#00000080');
  });

  it('should handle white color', () => {
    expect(alphaHex('#FFFFFF', 1)).toBe('#FFFFFFFF');
  });

  it('should throw error for invalid hex color', () => {
    expect(() => alphaHex('FF5733', 0.5)).toThrow();
    expect(() => alphaHex('#FFF', 0.5)).toThrow();
  });

  it('should throw error when amount is out of range', () => {
    expect(() => alphaHex('#FF5733', -0.1)).toThrow();
    expect(() => alphaHex('#FF5733', 1.1)).toThrow();
  });
});
