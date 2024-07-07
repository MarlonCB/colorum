import {
	BASE_16,
	HEXADECIMAL_NOTATION,
	RGB_NOTATION,
} from '../../../constants';
import { isValidHexColor } from '../../validators';

export const hexToRgb = (hexColor: string): string => {
	const validColor = isValidHexColor(hexColor);
	if (!validColor) {
		throw new Error('Invalid hexadecimal format');
	}
	hexColor = hexColor.replace(new RegExp(`^${HEXADECIMAL_NOTATION}`), '');
	if (hexColor.length === 3) {
		hexColor = hexColor
			.split('')
			.map((char) => char + char)
			.join('');
	}
	const r = parseInt(hexColor.slice(0, 2), BASE_16);
	const g = parseInt(hexColor.slice(2, 4), BASE_16);
	const b = parseInt(hexColor.slice(4, 6), BASE_16);
	return `${RGB_NOTATION}(${r},${g},${b})`;
};
