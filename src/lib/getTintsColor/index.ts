import {
	BASE_16,
	HEXADECIMAL_NOTATION,
} from '../../utils/constants/hexConstants';
import { MAXIMUM_RGB_VALUE } from '../../utils/constants/rgbConstants';

export function getTintsColor(hexColor) {
	hexColor = hexColor.replace(HEXADECIMAL_NOTATION, '');
	const r = parseInt(hexColor.slice(0, 2), BASE_16);
	const g = parseInt(hexColor.slice(2, 4), BASE_16);
	const b = parseInt(hexColor.slice(4, 6), BASE_16);
	const tints = {};

	for (let percent = 10; percent <= 100; percent += 10) {
		const adjustedR = Math.round(r + ((MAXIMUM_RGB_VALUE - r) * percent) / 100);
		const adjustedG = Math.round(g + ((MAXIMUM_RGB_VALUE - g) * percent) / 100);
		const adjustedB = Math.round(b + ((MAXIMUM_RGB_VALUE - b) * percent) / 100);
		const tintHex = `#${(adjustedR * 256 * 256 + adjustedG * 256 + adjustedB)
			.toString(16)
			.padStart(6, '0')}`;
		tints[`${percent}%`] = tintHex;
	}

	return tints;
}
