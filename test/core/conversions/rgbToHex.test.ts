import { rgbToHex } from '../../../src/core';

describe('rgbToHex', () => {
  it('should convert RGB to hexadecimal correctly', () => {
    expect(rgbToHex(136, 58, 241)).toBe('#883AF1');
    expect(rgbToHex(255, 0, 0)).toBe('#FF0000');
    expect(rgbToHex(0, 255, 0)).toBe('#00FF00');
    expect(rgbToHex(0, 0, 255)).toBe('#0000FF');
  });

  it('should handle edge cases with single-digit hex values', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000');
    expect(rgbToHex(15, 15, 15)).toBe('#0F0F0F');
    expect(rgbToHex(1, 2, 3)).toBe('#010203');
  });

  it('should handle maximum RGB values', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#FFFFFF');
  });

  it('should throw for invalid component values (out of range or non-integer)', () => {
    expect(() => rgbToHex(-1, 0, 0)).toThrow('must be an integer between 0 and 255');
    expect(() => rgbToHex(0, 256, 0)).toThrow('must be an integer between 0 and 255');
    expect(() => rgbToHex(0, 0, 1.5)).toThrow('must be an integer between 0 and 255');
    expect(() => rgbToHex(NaN as unknown as number, 0, 0)).toThrow(
      'must be an integer between 0 and 255'
    );
  });
});
