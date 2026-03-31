import { isHex } from '../../../src/core';

describe('isHex', () => {
  // Casos válidos
  it('should return true for a valid hex color with uppercase letters', () => {
    expect(isHex('#FF5733')).toBe(true);
  });

  it('should return true for a valid hex color with lowercase letters', () => {
    expect(isHex('#ff5733')).toBe(true);
  });

  // Valores límite del espectro
  it('should return true for black color', () => {
    expect(isHex('#000000')).toBe(true);
  });

  it('should return true for white color', () => {
    expect(isHex('#FFFFFF')).toBe(true);
  });

  // Casos inválidos
  it('should return false when missing the # prefix', () => {
    expect(isHex('FF5733')).toBe(false);
  });

  // El formato corto (#RGB) no está soportado, solo #RRGGBB
  it('should return false for shorthand hex format', () => {
    expect(isHex('#FFF')).toBe(false);
  });

  it('should return false for invalid characters', () => {
    expect(isHex('#GGGGGG')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isHex('')).toBe(false);
  });

  // El formato #RRGGBBAA (8 dígitos) tampoco es válido para isHex
  it('should return false for a hex with incorrect length', () => {
    expect(isHex('#FF57')).toBe(false);
    expect(isHex('#FF573300')).toBe(false);
  });
});
