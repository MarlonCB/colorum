import { randomColorGenerator, randomHexColor, randomRgbColor } from '..';
import { HEXADECIMAL_MAX_LENGTH } from '../constants/hexConstants';
import { Tformat } from '../lib/generators/randomColorGenerator';


describe('Random Color Generator', () => {
	describe('RGB', () => {
		it('should return a string in the format "rgb(red, green, blue)" when invoked', () => {
			const result = randomRgbColor();
			expect(result).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
		});
	});

	describe('Hex', () => {
		it("should return a string starting with '#' when invoked", () => {
			const color = randomHexColor();
			expect(color[0]).toBe('#');
		});

		it('should handle the maximum length of 6 hexadecimal digits correctly when invoked', () => {
			const color = randomHexColor();
			expect(color.length).toBe(HEXADECIMAL_MAX_LENGTH + 1); // +1 for the '#'
		});
	});

	it('should handle unexpected format values gracefully', () => {
		const color = randomColorGenerator('unexpected_format' as Tformat);
		expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
	});
});
