import { grayscale } from '../../../src/core';

describe('grayscale', () => {
  // Caso base: aplica la fórmula de luminancia Y = R×0.299 + G×0.587 + B×0.114
  it('should convert a hex color to grayscale using the luminance formula', () => {
    expect(grayscale('#FF5733')).toBe('#858585');
  });

  // Negro permanece negro
  it('should return black when given black', () => {
    expect(grayscale('#000000')).toBe('#000000');
  });

  // Blanco permanece blanco
  it('should return white when given white', () => {
    expect(grayscale('#FFFFFF')).toBe('#FFFFFF');
  });

  // Canal rojo puro — cada canal tiene un peso distinto en la fórmula
  it('should apply correct luminance weight for pure red', () => {
    expect(grayscale('#FF0000')).toBe('#4C4C4C');
  });

  // Canal verde puro
  it('should apply correct luminance weight for pure green', () => {
    expect(grayscale('#00FF00')).toBe('#969696');
  });

  // Canal azul puro
  it('should apply correct luminance weight for pure blue', () => {
    expect(grayscale('#0000FF')).toBe('#1D1D1D');
  });

  // Input en minúsculas debe producir output en mayúsculas
  it('should return uppercase hex regardless of input case', () => {
    expect(grayscale('#aabbcc')).toBe('#B8B8B8');
  });

  // El resultado debe ser un hex válido con los tres canales iguales
  it('should return a hex color with all three channels equal', () => {
    const result = grayscale('#FF5733');
    const clean = result.slice(1);
    expect(clean.substring(0, 2)).toBe(clean.substring(2, 4));
    expect(clean.substring(2, 4)).toBe(clean.substring(4, 6));
  });

  // Inputs inválidos deben lanzar error
  it('should throw error for invalid hex color', () => {
    expect(() => grayscale('FF5733')).toThrow();
    expect(() => grayscale('#FFF')).toThrow();
    expect(() => grayscale('#GGGGGG')).toThrow();
  });
});
