import { hexToRgb } from '../lib';
import { rgbToHex } from '../lib/converters/rgbToHex/rgbToHex';

describe('Converters', () => {
	describe('Hex to RGB', () => {
		// converts valid 6-character hex color to RGB format
		it('should convert valid 6-character hex color to RGB format', () => {
			const hexColor = '#1a2b3c';
			const expectedRgb = 'rgb(26,43,60)';
			const result = hexToRgb(hexColor);
			expect(result).toBe(expectedRgb);
		});
		// converts valid 3-character hex color to RGB format
		it('should convert valid 3-character hex color to RGB format', () => {
			const hexColor = '#037';
			const expectedRgb = 'rgb(0,51,119)';
			const result = hexToRgb(hexColor);
			expect(result).toBe(expectedRgb);
		});

		// throws error for invalid hex color format
		it('should throw error for invalid hex color format', () => {
			const invalidHexColor = '12345g';
			expect(() => hexToRgb(invalidHexColor)).toThrow(
				'Invalid hexadecimal format'
			);
		});
	});
	describe('RGB to Hex', () => {
		// Converts valid RGB string 'rgb(255, 0, 0)' to '#FF0000'
		it('should convert valid RGB string to hexadecimal', () => {
			const rgbColor = 'rgb(255, 0, 0)';
			const expectedHex = '#FF0000';
			const result = rgbToHex(rgbColor);
			expect(result).toBe(expectedHex);
		});
		// Throws error for invalid RGB string 'rgb(256, 0, 0)'
		it('should throw error for invalid RGB string', () => {
			const rgbColor = 'rgb(256, 0, 0)';
			expect(() => rgbToHex(rgbColor)).toThrow('Invalid rgb format');
		});
	});
});
