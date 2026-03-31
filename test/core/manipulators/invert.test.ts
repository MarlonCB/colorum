import { invert } from '../../../src/core';

describe('invert', () => {
  // Caso base: cada componente se resta de 255
  it('should invert a hex color correctly', () => {
    expect(invert('#FF5733')).toBe('#00A8CC');
  });

  // Invertir negro da blanco y viceversa
  it('should return white when inverting black', () => {
    expect(invert('#000000')).toBe('#FFFFFF');
  });

  it('should return black when inverting white', () => {
    expect(invert('#FFFFFF')).toBe('#000000');
  });

  // Invertir dos veces debe devolver el color original
  it('should return the original color when inverted twice', () => {
    expect(invert(invert('#FF5733'))).toBe('#FF5733');
  });

  // Valores de un solo dígito hex deben mantener el padding de dos dígitos
  it('should handle colors with single-digit hex components', () => {
    expect(invert('#010203')).toBe('#FEFDFC');
  });

  // El resultado debe estar siempre en mayúsculas
  it('should return uppercase hex', () => {
    expect(invert('#aabbcc')).toBe('#554433');
  });

  it('should throw error for invalid hex color', () => {
    expect(() => invert('FF5733')).toThrow();
    expect(() => invert('#FFF')).toThrow();
    expect(() => invert('#GGGGGG')).toThrow();
  });
});
