import {
	BASE_10,
	MAXIMUM_RGB_VALUE,
	MINIMUM_RGB_VALUE,
} from '../../../constants/rgbConstants';
import { isValidRange } from '../../../helpers';

export const isValidRgbColor = (rgb: string): boolean => {
	const regex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
	const match = rgb.match(regex);
	if (!match) {
		return false;
	}
	const r = parseInt(match[1], BASE_10);
	const g = parseInt(match[2], BASE_10);
	const b = parseInt(match[3], BASE_10);
	const result =
		isValidRange(r, MINIMUM_RGB_VALUE, MAXIMUM_RGB_VALUE) &&
		isValidRange(g, MINIMUM_RGB_VALUE, MAXIMUM_RGB_VALUE) &&
		isValidRange(b, MINIMUM_RGB_VALUE, MAXIMUM_RGB_VALUE);
	return result;
};
