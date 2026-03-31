import { isRgb } from '../../../src/core';

describe('isRgb', () => {
  // Caso base
  it('should return true for a valid RGB color', () => {
    expect(isRgb('rgb(255, 87, 51)')).toBe(true);
  });

  // Valores límite del espectro
  it('should return true for black color', () => {
    expect(isRgb('rgb(0, 0, 0)')).toBe(true);
  });

  it('should return true for white color', () => {
    expect(isRgb('rgb(255, 255, 255)')).toBe(true);
  });

  // El regex permite espacios opcionales alrededor de cada valor
  it('should return true with extra spaces', () => {
    expect(isRgb('rgb( 255 , 87 , 51 )')).toBe(true);
  });

  // El rango válido por canal es 0-255; 256 y 300 deben ser rechazados
  it('should return false for values out of range', () => {
    expect(isRgb('rgb(256, 0, 0)')).toBe(false);
    expect(isRgb('rgb(0, 0, 300)')).toBe(false);
  });

  it('should return false for missing prefix', () => {
    expect(isRgb('(255, 87, 51)')).toBe(false);
  });

  // Un color hex no debe ser aceptado como RGB
  it('should return false for hex format', () => {
    expect(isRgb('#FF5733')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isRgb('')).toBe(false);
  });

  it('should return false for missing parentheses', () => {
    expect(isRgb('rgb 255, 87, 51')).toBe(false);
  });
});
