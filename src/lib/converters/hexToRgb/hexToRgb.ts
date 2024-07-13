import {
	BASE_16,
	HEX_COMPONENTS_COUNT,
	HEXADECIMAL_NOTATION,
	RGB_NOTATION,
} from '../../../constants';
import { isValidHexColor } from '../../validators';

/**
 * Converts a hexadecimal color string to its RGB representation.
 * @param {string} hexColor The hexadecimal color string (e.g., '#ff0000').
 * @returns {string} The RGB representation of the color (e.g., 'rgb(255,0,0)').
 * @throws {Error} Throws an error if the hexadecimal format is invalid.
 */
export const hexToRgb = (hexColor: string): string => {
	const validColor = isValidHexColor(hexColor);
	if (!validColor) {
		throw new Error('Invalid hexadecimal format');
	}
	hexColor = hexColor.replace(new RegExp(`^${HEXADECIMAL_NOTATION}`), '');
	if (hexColor.length === HEX_COMPONENTS_COUNT) {
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
