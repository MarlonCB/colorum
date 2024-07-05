import {
	BASE_16,
	HEXADECIMAL_NOTATION,
} from '../../utils/constants/hexConstants';

export function getShadesColor(hexColor) {
	hexColor = hexColor.replace(HEXADECIMAL_NOTATION, '');
	const r = parseInt(hexColor.slice(0, 2), BASE_16);
	const g = parseInt(hexColor.slice(2, 4), BASE_16);
	const b = parseInt(hexColor.slice(4, 6), BASE_16);
	const shades = {};

	for (let percent = 10; percent <= 100; percent += 10) {
		const shadeFactor = 1 - percent / 100;
		const adjustedR = Math.round(r * shadeFactor);
		const adjustedG = Math.round(g * shadeFactor);
		const adjustedB = Math.round(b * shadeFactor);

		const shadeHex = `#${(adjustedR * 256 * 256 + adjustedG * 256 + adjustedB)
			.toString(BASE_16)
			.padStart(6, '0')}`;

		shades[`${percent}%`] = shadeHex;
	}

	return shades;
}
