import { getRandomHex } from '../../../src/core';

describe('getRandomHex', () => {
  it('should return a valid hexadecimal color string', () => {
    const result = getRandomHex();
    // Validar tipo
    expect(typeof result).toBe('string');
    // Validar formato HEX con expresión regular
    expect(result).toMatch(/^#[0-9a-fA-F]{6}$/);
  });

  it('should start with "#" and be exactly 7 characters long', () => {
    const result = getRandomHex();

    expect(result.startsWith('#')).toBe(true);
    expect(result.length).toBe(7);
  });
});
