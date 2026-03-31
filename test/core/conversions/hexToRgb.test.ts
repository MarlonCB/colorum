import { hexToRgb } from '../../../src/core';

describe('hexToRgb', () => {
  // Caso base: conversión correcta con letras mayúsculas
  it('should convert hex color with # to RGB object', () => {
    const result = hexToRgb('#FF5733');
    expect(result.r).toBe(255);
    expect(result.g).toBe(87);
    expect(result.b).toBe(51);
  });

  // El parser debe ser insensible a mayúsculas/minúsculas
  it('should handle lowercase hex colors', () => {
    const result = hexToRgb('#ff5733');
    expect(result.r).toBe(255);
    expect(result.g).toBe(87);
    expect(result.b).toBe(51);
  });

  // Verifica que toStringCss() produce el formato CSS correcto
  it('should convert toStringCss() to valid CSS rgb format', () => {
    const result = hexToRgb('#FF5733');
    expect(result.toStringCss()).toBe('rgb(255, 87, 51)');
  });

  // Cubre: caracteres inválidos, formato corto (#FFF), sin # y longitud incorrecta
  it('should throw error for invalid hex colors', () => {
    expect(() => hexToRgb('#GGGGGG')).toThrow();
    expect(() => hexToRgb('#FFF')).toThrow();
    expect(() => hexToRgb('FF5733')).toThrow();
    expect(() => hexToRgb('FF57')).toThrow();
  });

  // Valores límite del espectro RGB
  it('should handle black color', () => {
    const result = hexToRgb('#000000');
    expect(result.r).toBe(0);
    expect(result.g).toBe(0);
    expect(result.b).toBe(0);
    expect(result.toStringCss()).toBe('rgb(0, 0, 0)');
  });

  it('should handle white color', () => {
    const result = hexToRgb('#FFFFFF');
    expect(result.r).toBe(255);
    expect(result.g).toBe(255);
    expect(result.b).toBe(255);
    expect(result.toStringCss()).toBe('rgb(255, 255, 255)');
  });
});
