import { hexToRgb } from '../lib';

describe('Random Color Generator', () => {
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
});
