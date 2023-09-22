import { randomHexColor, randomRgbColor } from '..';

describe('Random Generators', () => {
	// Tests that the generated hex color contains only hexadecimal characters
	it('should contain only hexadecimal characters', () => {
		const hexColor = randomHexColor();
		const regex = /^#[0-9A-F]{6}$/i;
		expect(regex.test(hexColor)).toBe(true);
	});
	// Tests that randomRgbColor function returns an object with properties r, g, and b, each of which is an integer.
	it('should return an object with properties r, g, and b, each of which is an integer', () => {
		const rgbColor = randomRgbColor();
		expect(Number.isInteger(rgbColor.r)).toBe(true);
		expect(Number.isInteger(rgbColor.g)).toBe(true);
		expect(Number.isInteger(rgbColor.b)).toBe(true);
	});
});
