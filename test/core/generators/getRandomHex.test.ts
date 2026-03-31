import { getRandomHex } from '../../../src/core';

describe('getRandomHex', () => {
  // Verifica que el resultado sea un string con formato hex válido (#RRGGBB)
  it('should return a valid hexadecimal color string', () => {
    const result = getRandomHex();
    expect(typeof result).toBe('string');
    expect(result).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  // Verifica la longitud exacta: # + 6 dígitos = 7 caracteres
  it('should start with "#" and be exactly 7 characters long', () => {
    const result = getRandomHex();

    expect(result.startsWith('#')).toBe(true);
    expect(result.length).toBe(7);
  });
});
